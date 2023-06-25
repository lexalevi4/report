import { Button, ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, Switch, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { DatePicker } from "@mui/x-date-pickers";

function ActivitiesSettingsTableRowCreate({ activity = { id: 0, status: 0, text: '', name: '', active: false } }) {

    const [status_open, setStatus_open] = useState(false);
    const anchorRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(activity.status);


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

    const statuses = [
        'Запланировано',
        'В работе',
        'Выполнено',
        'Отменено',
    ]
    return (
        <>
            <TableRow>
                <TableCell>
                    <Switch
                        edge="end"
                        // onChange={(e) => setAds(e.target.checked)}
                        checked={activity.active}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        id="outlined-multiline-flexible"
                        // label="Инфо по расклейке"
                        // placeholder='Инфо по расклейке'
                        rows={4}
                        value={activity.name}
                        // onChange={(e) => setAdsResult(e.target.value)}
                        // multiline
                        // maxRows={8}
                        fullWidth
                    />


                </TableCell>
                <TableCell>

                    <TextField
                        id="outlined-multiline-flexible"
                        // label="Инфо по расклейке"
                        // placeholder='Инфо по расклейке'
                        rows={4}
                        value={activity.text}
                        // onChange={(e) => setAdsResult(e.target.value)}
                        multiline
                        // maxRows={8}
                        fullWidth
                    />

                </TableCell>
                <TableCell>
                    <ButtonGroup variant="outlined" ref={anchorRef} aria-label="split button">
                        <Button >{statuses[activity.status]}</Button>
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
                    <DatePicker />
                </TableCell>
                <TableCell>
                    <Button>
                        Создать
                    </Button>
                </TableCell>
            </TableRow>
        </>
    );
}

export default ActivitiesSettingsTableRowCreate;