import { Button, ButtonGroup, Grow, MenuItem, MenuList, Paper, Popper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function ClientsTableRow({ item, index }) {






    const statuses = [
        'Неразобрано',
        'Проявлен интерес',
        'Назначен показ',
        'Показ прошёл',
        'Получено предложение',
        'Аванс',
        'Не интересно'
    ]

    const [status_open, setStatus_open] = useState(false);
    const anchorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(item.status);


    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setStatus_open(false);
    };


    const handleToggle = () => {
        setStatus_open((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setStatus_open(false);
    };

    const types = {
        'call_in': 'Входящий звонок',
        'call_out': 'Изходящий звонок',
        'note': 'Примечание',
    }
    const [show_history, setShow_history] = useState(false)

    return (
        <>
            <TableRow >

                <TableCell>
                    {item.name}
                </TableCell>
                <TableCell>
                    {item.src}
                </TableCell>
                <TableCell>


                    <ButtonGroup variant="outlined" ref={anchorRef} aria-label="split button">
                        <Button >{statuses[selectedIndex]}</Button>
                        <Button
                            size="small"
                            aria-controls={status_open ? 'split-button-menu' : undefined}
                            aria-expanded={status_open ? 'true' : undefined}
                            aria-label="Выберете статус"
                            aria-haspopup="menu"
                            onClick={handleToggle}
                        >
                            <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>


                    <Popper
                        sx={{
                            zIndex: 1,
                        }}
                        open={status_open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList id="split-button-menu" autoFocusItem>
                                            {statuses.map((option, index) => (
                                                <MenuItem
                                                    key={option}
                                                    // disabled={index === 2}
                                                    
                                                    selected={index === selectedIndex}
                                                    onClick={(event) => handleMenuItemClick(event, index)}
                                                >
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>




                </TableCell>
                <TableCell>
                    <Button
                        onClick={() => setShow_history(!show_history)}
                    >
                        История
                    </Button>
                </TableCell>


            </TableRow>
            <TableRow
                style={
                    !show_history ?
                        {
                            display: 'none'
                        } :
                        {

                        }
                }

                key={'client_+events' + index}
            >

                <TableCell
                    colSpan={4}
                >
                    <TableContainer
                        component={Paper}
                    >
                        <Table
                        // component={'paper'}
                        >
                            <TableHead>
                                <TableRow>

                                    <TableCell>
                                        Дата
                                    </TableCell>
                                    <TableCell>
                                        Тип
                                    </TableCell>

                                    <TableCell>
                                        Инфо
                                    </TableCell>

                                </TableRow>

                            </TableHead>
                            <TableBody>
                                {
                                    item.events.map(function (event, index) {
                                        // console.log(event.created_at)
                                        // console.log(Date(Number(event.created_at)))
                                        var s = new Date(Number(event.created_at * 1000)).toLocaleDateString("ru-RU")
                                        // console.log(s)
                                        return (
                                            <TableRow key={'event_' + index}>

                                                <TableCell>
                                                    {
                                                        s
                                                    }
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        types[event.type]
                                                    }
                                                </TableCell>

                                                <TableCell>
                                                    {
                                                        event.record === '' ? event.text : (
                                                            <ReactAudioPlayer
                                                                src={event.record}
                                                                autoPlay={false}
                                                                controls
                                                            />
                                                        )
                                                    }
                                                </TableCell>

                                            </TableRow>
                                        )
                                    })

                                }

                            </TableBody>

                        </Table>
                    </TableContainer>




                </TableCell>



            </TableRow >
        </>

    );
}

export default ClientsTableRow;