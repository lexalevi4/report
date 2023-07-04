import { Box, Button, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ClientsTableRowReport from "./ClientsTableRowReport";
import { useEffect, useState } from "react";

function ClientsTableReport({ clients }) {

    // const [rows, setRows] = useState(5);
    const rows = 4;
    // console.log(clients)
    const [showAll, setShowAll] = useState(false)
    const [clientsToShow, setClientsToShow] = useState(clients.slice(0, rows))


    useEffect(() => {

        if (showAll) {
            setClientsToShow(clients)
        } else {
            setClientsToShow(clients.slice(0, rows))
        }
    }, [showAll])


    // console.log(clients.length)

    if (clients.length === 0) {
        return (<></>)
    }


    return (<>

        <Divider
            className="my-10"
        />
        <Typography
            className="my-10"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}

            variant='h5'
        >Заявки</Typography>

        <TableContainer
            component={Paper}
        >
            <Table
            // component={'paper'}
            >
                <TableHead>
                    <TableRow>


                        <TableCell>
                            Источник
                        </TableCell>

                        <TableCell>
                            Статус
                        </TableCell>


                    </TableRow>

                </TableHead>
                <TableBody>
                    {
                        clientsToShow.map(function (item, index) {
                            return (
                                <ClientsTableRowReport
                                    key={'client_in_report_' + index}
                                    item={item}

                                />
                                // <></>
                                // key={'client' + index
                                // <ClientsTableRowReport
                                //     item={item}
                                //     index={index}

                                //     key={'client_' + index}
                                //      />
                            )
                        })
                    }

                    {
                        (clients.length > rows) &&
                        (<>
                            <TableRow>
                                <TableCell
                                    colSpan={2}
                                >
                                    <Box
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',

                                        }}
                                    >
                                        <Button
                                            variant="text"
                                            onClick={() => setShowAll(!showAll)}

                                        >
                                            {showAll ? 'Скрыть' : 'Показать все'}


                                        </Button>
                                    </Box>

                                </TableCell>
                            </TableRow>
                        </>)
                    }



                </TableBody>

            </Table>
        </TableContainer >


    </>);
}

export default ClientsTableReport;