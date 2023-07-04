import { Box, Divider, Link, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Object from "../components/Object";

import Stats from "../components/Stats";
import Clients from "../components/Clients";
import PricesForClient from "../components/PricesForClient";
import SummaryForClients from "../components/SummaryForClients";
import { ReactComponent as LogoSvg } from '../images/logo.svg';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Agent from "../components/Agent";
import ActivitiesGallery from "../components/ActivitiesGallery";
import Assessment from "../components/Assessment";

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


    const [rating, setRating] = useState(null)

    const handleRating = async (event, newValue) => {


        try {
            await fetch('https://report.turbobroker.ru/report/assessment', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // data: data,
                    object_id: data.object.object_id,
                    rating: newValue
                    // tg_data: window.Telegram.WebApp.initData || null
                })
            })
            // .then((response) => response.json())
            // .then(
            //     (data) => {
            //         console.log(data);
            //         // if (data.task === 'new') {
            //         // activities.push(data.activity)
            //         setActivities(data.activities);
            //         // }else{}
            //     }

            //     // setIsFav(!isFav)
            // )
        } catch (e) {
            console.log(e)

        }

        setRating(newValue);
    }

    // const report_id = useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();


    const [data, setData] = useState(null);


    useEffect(() => {
        fetch('https://report.turbobroker.ru/report/get-object?id=' + searchParams.get('report_id'), {
        })
            .then(res => res.json())
            .then(data => setData(data))
    }, [searchParams, setSearchParams, setData, navigate])


    useEffect(() => {
        document.title = 'Отчёт по вашему объекту';
    }, []);


    if (data === null) {
        return (
            <>
            </>
        )

    }
    // console.log(data.object.price)



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
                        (data.clients && data.clients.length > 0) && (
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
                        <Assessment assessment={data.current_assessment} object_id={data.object.object_id} report={true} />
                        {/* <StyledRating
                            max={3}
                            value={rating}
                            onChange={handleRating}

                            name="highlight-selected-only"
                            // defaultValue={4}
                            IconContainerComponent={IconContainer}
                            getLabelText={(value) => customIcons[value].label}
                            highlightSelectedOnly
                        /> */}
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
                        Данный отчёт предоставлен и сформирован в рамках действия договора c <Link target="_blank" href='https://credit-center.ru'>ООО "Кредит-Центр"</Link>
                    </footer>

                </Box>
            </Box >

        </>


    );
}

export default Report;