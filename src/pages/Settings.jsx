import { Box, Button, Divider, Grid, Input, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Object from "../components/Object";
import Slider from '@mui/joy/Slider';
import Stats from "../components/Stats";
import ClientsTable from "../components/ClientsTable";
import ActivitiesSettings from "../components/ActivitiesSettings";

function Settings() {

    // const report_id = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();


    const activities = [
        {
            active: true,
            id: '1',
            name: 'Расклейка',
            text: 'Обклеили всё Обклеили всё Обклеили всё Обклеили всё Обклеили всё Обклеили всё',
            status: 1,
            price: 5000,
            date: '2023-06-14'
            // date: null


        }
    ];
    // const data = {};
    const [data, setData] = useState(null);


    useEffect(() => {
        fetch('https://report.turbobroker.ru/report/get-object?id=' + searchParams.get('report_id'), {
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [searchParams, setSearchParams, setData, navigate])

    if (data === null) {
        return (
            <>
            </>
        )

    }



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

                    {/* {console.log(data)} */}
                    {
                        data.clients && (


                            <ClientsTable
                                clients={data.clients}
                            />
                        )


                    }

                    <ActivitiesSettings

                        basic_activities={data.object.activities}
                        object_id={data.object.object_id}
                    />
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
                    >
                        Цена
                    </Typography>
                    <Box
                        className="mt-10"

                    >
                        <TableContainer>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            width={'50%'}
                                        >
                                            <TableContainer>
                                                <Table>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>
                                                                <Typography>
                                                                    Конец
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>
                                                                <TextField
                                                                    value={15500000}
                                                                // onChange={(e) => setAdsResult(e.target.value)}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>
                                                                <Typography>
                                                                    Верхняя граница диапазона
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>
                                                                <TextField
                                                                    value={14500000}
                                                                // onChange={(e) => setAdsResult(e.target.value)}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>
                                                                <Typography>
                                                                    Значение
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>
                                                                <TextField
                                                                    value={13250000}
                                                                // onChange={(e) => setAdsResult(e.target.value)}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>
                                                                <Typography>
                                                                    Нижняя граница диапазона
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>
                                                                <TextField
                                                                    value={12500000}
                                                                // onChange={(e) => setAdsResult(e.target.value)}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>
                                                                <Typography>
                                                                    Начало
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>
                                                                <TextField
                                                                    value={11500000}
                                                                // onChange={(e) => setAdsResult(e.target.value)}
                                                                />
                                                            </TableCell>

                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>

                                                            </TableCell>
                                                            <TableCell>
                                                                <Button
                                                                    variant="contained"
                                                                >
                                                                    Сохранить
                                                                </Button>
                                                            </TableCell>

                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>



                                        </TableCell>
                                        <TableCell
                                            width={'50%'}
                                        >
                                            <Slider
                                                // width='80%'

                                                marks={[
                                                    {
                                                        value: 12500000,
                                                        label: '12 500 000',
                                                    },
                                                    {
                                                        value: 14500000,
                                                        label: '14 500 000',
                                                    },
                                                ]}
                                                valueLabelFormat={(val) => {
                                                    return val.toLocaleString()

                                                }}
                                                track={false}
                                                step={50000}
                                                min={11500000}
                                                max={15500000}
                                                size={'lg'}
                                                // track="inverted"
                                                valueLabelDisplay="on"
                                                // aria-labelledby="track-inverted-range-slider"
                                                // getAriaValueText={valueText}
                                                defaultValue={13250000}
                                            // marks={marks}
                                            />

                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Box>

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
            </Box >

        </>


    );
}

export default Settings;