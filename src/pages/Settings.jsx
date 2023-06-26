import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Object from "../components/Object";

import Stats from "../components/Stats";
import ClientsTable from "../components/ClientsTable";
import ActivitiesSettings from "../components/ActivitiesSettings";
import Prices from "../components/Prices";
import Summary from "../components/Summary";

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
    console.log(data.object.price)



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
                    <Prices
                        price={data.object.price}
                        object_id={data.object.object_id}
                        price_min={data.object.price_min}
                        price_max={data.object.price_max}
                        price_low={data.object.price_low}
                        price_high={data.object.price_high}
                    />


                    <Summary
                        report_plans={data.object.report_plans}
                        report_recomendations={data.object.report_recomendations}
                        report_result={data.object.report_result}
                        object_id={data.object.object_id}
                    />

                    <Box
                        height={300}
                    ></Box>

                </Box>
            </Box >

        </>


    );
}

export default Settings;