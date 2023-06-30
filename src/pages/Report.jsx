import { Avatar, Box, Button, Divider, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Object from "../components/Object";

import Stats from "../components/Stats";
import ClientsTable from "../components/ClientsTable";
import ActivitiesSettings from "../components/ActivitiesSettings";
import Prices from "../components/Prices";
import Summary from "../components/Summary";
import Clients from "../components/Clients";
import ActivitiesList from "../components/ActivitiesList";
import PricesForClient from "../components/PricesForClient";
import SummaryForClients from "../components/SummaryForClients";
import { ReactComponent as LogoSvg } from '../images/logo.svg';




import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Agent from "../components/Agent";
import ActivitiesGallery from "../components/ActivitiesGallery";

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root ': {
        color: theme.palette.action.disabled,
    },
}));


function Report() {




    const customIcons = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon
                className='text-6xl'
                color="error" />,
            label: 'Плохо',
        },
        // 2: {
        //   icon: <SentimentDissatisfiedIcon color="error"
        //     className='text-6xl'
        //   />,
        //   label: 'Dissatisfied',
        // },
        2: {
            icon: <SentimentNeutralIcon color="warning"
                className='text-6xl'
            />,
            label: 'Нормально',
        },
        // 4: {
        //   icon: <SentimentSatisfiedAltIcon color="success"
        //     className='text-6xl'
        //   />,
        //   label: 'Satisfied',
        // },
        3: {
            icon: <SentimentVerySatisfiedIcon color="success"
                className='text-6xl'
            />,
            label: 'Хорошо',
        },
    };

    function IconContainer(props) {

        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
    }

    IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
    };



    // const report_id = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();


    // const activities = [
    //     {
    //         active: true,
    //         id: '1',
    //         name: 'Расклейка',
    //         text: 'Обклеили всё Обклеили всё Обклеили всё Обклеили всё Обклеили всё Обклеили всё',
    //         status: 1,
    //         price: 5000,
    //         date: '2023-06-14'
    //         // date: null


    //     }
    // ];
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
                    <LogoSvg
                        className="mb-10"
                        style={{
                            maxWidth: 500

                        }}

                    />
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
                                report={true}
                                stats={data.stats}
                            />
                        )
                    }

                    {/* {console.log(data)} */}
                    {
                        data.clients && (
                            <Clients
                                report={true}
                                clients={data.clients}
                            />

                        )


                    }

                    <ActivitiesGallery
                        activities={data.object.activities}
                    />


                    {/* <ActivitiesList
                        activities={data.object.activities}
                    /> */}


                    {(data.object.price_high > 0 
                    && data.object.price_low > 0
                    && data.object.price_max > 0
                    && data.object.price_min > 0
                    
                    ) && (
                        <PricesForClient
                            current={data.object.price}
                            min={data.object.price_min}
                            max={data.object.price_max}
                            low={data.object.price_low}
                            high={data.object.price_high}
                        />

                    )}



                    <SummaryForClients
                        className='mt-10'
                        plans={data.object.report_plans}
                        recomendations={data.object.report_recomendations}
                        result={data.object.report_result}
                    />

                    {/* <Summary
                        report_plans={data.object.report_plans}
                        report_recomendations={data.object.report_recomendations}
                        report_result={data.object.report_result}
                        object_id={data.object.object_id}
                    /> */}


                    <Agent user={data.user} />

                    {/* 
                    <Box
                        height={300}
                    ></Box> */}

                    <Divider
                        className="my-10"
                    />





                    <Paper

                        className='my-10 p-2 items-center flex'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}

                    >
                        <StyledRating
                            max={3}

                            name="highlight-selected-only"
                            // defaultValue={4}
                            IconContainerComponent={IconContainer}
                            getLabelText={(value) => customIcons[value].label}
                            highlightSelectedOnly
                        />
                    </Paper>




                    <Divider
                        className="my-10"
                    />



                    <footer
                        className='items-center text-center'
                        style={{
                            // display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}

                    >
                        Данный отчёт предоставлен и сформирован в рамках действия Договора №... c <Link target="_blank" href='https://credit-center.ru'>ООО "Кредит-Центр"</Link>
                    </footer>

                </Box>
            </Box >

        </>


    );
}

export default Report;