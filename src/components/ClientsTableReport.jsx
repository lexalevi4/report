import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ClientsTableRowReport from "./ClientsTableRowReport";

function ClientsTableReport({ clients }) {

    console.log(clients)

    if (clients.lenght === 0) {
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
                        clients.map(function (item, index) {
                            return (
                                <ClientsTableRowReport
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

                </TableBody>

            </Table>
        </TableContainer >


    </>);
}

export default ClientsTableReport;