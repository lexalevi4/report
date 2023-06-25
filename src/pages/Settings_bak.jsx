import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Object from "../components/Object";

import Stats from "../components/Stats";

function Settings() {

    // const report_id = useParams()
    const [searchParams, setSearchParams] = useSearchParams();

    // const data = {};
    const [data, setData] = useState(null);
    console.log(searchParams.get('report_id'))


    useEffect( ()=>{
        console.log('FacetTreeView: useEffect entered');
       
     }, []);

    useEffect(() => {
        console.log('asdfasdf');
        fetch('http://stats/report/get-object?id=' + searchParams.get('report_id'), {
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [searchParams])

    
    if (data === null) {

        return (<h2>
            asdfasdf
        </h2>)
    }
    console.log(data.stats)

    return (
        <>
            <Box className="bg-white pb-8">
                <Box className="p-4 pb-0 bg-third-bg sm:max-w-7xl mx-auto">

                    {
                        data?.object && (
                            <Object
                                object={data.object}
                            ></Object>

                        )
                    }
                    {
                        data?.stats && (
                            <Stats
                                stats={data.stats}
                            />
                        )
                    }

                    {console.log(data)}
                    {
                        data?.clients && data.clients.length > 0(

                            <TableContainer component={'paper'}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Название
                                            </TableCell>
                                            <TableCell>
                                                Иточник
                                            </TableCell>
                                            <TableCell>
                                                Статус
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            data.clients.map(function (item, index) {
                                                return (
                                                    <>
                                                        <TableRow>
                                                            <TableCell>
                                                            {item.name}
                                                            </TableCell>
                                                            <TableCell>
                                                            {item.src}
                                                            </TableCell>
                                                            <TableCell>
                                                            {item.status}
                                                            </TableCell>
                                                        </TableRow>
                                                    </>
                                                )
                                            })
                                        }




                                    </TableBody>


                                </Table>
                            </TableContainer>
                        )
                    }

                    <Grid
                        className="sm:flex sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:items-center sm:justify-between bg-white p-6"
                    >
                        <Grid item className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:space-y-4 md:w-4/12">

                            <div className="sm:flex">
                                <img src="https://educlever.beplusthemes.com/university/wp-content/uploads/2018/11/forma4.png" alt="" />
                            </div>
                            <Typography className="sm:flex text-xl font-bold">Lorem ipsum dolor sit</Typography>
                            <Typography className="sm:flex sm:text-center">Lorem ipsum dolor sit amet, conse ct amet, conse adipiscing elit dolor sit a amet, conse adipisci</Typography>

                        </Grid>
                        <Grid item className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:space-y-4 md:w-4/12">

                            <div className="sm:flex">
                                <img src="https://educlever.beplusthemes.com/university/wp-content/uploads/2018/11/forma3.png" alt="" />
                            </div>
                            <Typography className="sm:flex text-xl font-bold">Lorem ipsum dolor sit</Typography>
                            <Typography className="sm:flex sm:text-center">Lorem ipsum dolor sit amet, conse ct amet, conse adipiscing elit dolor sit a amet, conse adipisci</Typography>

                        </Grid>
                        <Grid item className="sm:flex sm:flex-col sm:items-center sm:justify-center sm:space-y-4 md:w-4/12">

                            <div className="sm:flex">
                                <img src="https://educlever.beplusthemes.com/university/wp-content/uploads/2018/11/forma2.png" alt="" />
                            </div>
                            <Typography className="sm:flex text-xl font-bold">Lorem ipsum dolor sit</Typography>
                            <Typography className="sm:flex sm:text-center">Lorem ipsum dolor sit amet, conse ct amet, conse adipiscing elit dolor sit a amet, conse adipisci</Typography>

                        </Grid>

                    </Grid>

                </Box>
            </Box>

        </>


    );
}

export default Settings;