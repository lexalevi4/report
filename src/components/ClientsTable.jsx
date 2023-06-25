import { TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import ClientsTableRow from "./ClientsTableRow";

function ClientsTable({ clients }) {






    // { console.log(clients) }
    if (clients.lenght === 0) {
        return (<></>)

    }
    return (
        <>

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
                                Название
                            </TableCell>
                            <TableCell>
                                Источник
                            </TableCell>

                            <TableCell>
                                Статус
                            </TableCell>
                            <TableCell>
                                История
                            </TableCell>

                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {
                            clients.map(function (item, index) {
                                return (
                                    // key={'client' + index
                                    <ClientsTableRow
                                        item={item}
                                        index={index}

                                        key={'client_' + index} />
                                )
                            })
                        }

                    </TableBody>

                </Table>
            </TableContainer >
        </>
    );
}

export default ClientsTable;