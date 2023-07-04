import { Button, ButtonGroup, Grow, MenuItem, MenuList, Paper, Popper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function ClientsTableRow({ item, index }) {




    // console.log(item)


    const statuses = [
        { name: 'Неразобрано', id: 0 },
        { name: 'Проявлен интерес', id: 1 },
        { name: 'Назначен показ', id: 2 },
        { name: 'Показ прошёл', id: 3 },
        { name: 'Получено предложение', id: 4 },
        { name: 'Аванс', id: 5 },
        { name: 'Не интересно', id: 6 },
    ]

    const [status_open, setStatus_open] = useState(false);
    const anchorRef = useRef(null);
    const [status, setStatus] = useState(item.status);



    const handleMenuItemClick = async (event, index) => {
        setStatus(index);
        let data = new FormData();

        data.append('lead_id', item.lead_id)
        data.append('object_id', item.object_id)
        data.append('status', index)
        try {
            await fetch('https://report.turbobroker.ru/report/set-client-status', {
                method: 'POST',
                body: data,
            }).then(res => res.json())
            // .then(data => setImages(data.images))
            // setImages_disabled(false);
        } catch (e) {
            // console
        }
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
        'call_out': 'Иcходящий звонок',
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
                    {item.status}
                    {item.comment && (
                        <>:
                            <br />
                            {/* <br /> */}
                            {item.comment}
                        </>
                    )}






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
                    {show_history && (
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
                    )}





                </TableCell>



            </TableRow >
        </>

    );
}

export default ClientsTableRow;