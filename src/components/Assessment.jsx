import { Rating } from "@mui/material";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useState } from "react";

import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

function Assessment({ assessment, object_id = 0, report = false }) {


    const [rating, setRating] = useState(assessment.status)

    const handleRating = async (event, newValue) => {

        if (report && newValue > 0 ) {

            try {
                await fetch('https://report.turbobroker.ru/report/assessment', {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        // data: data,
                        object_id: object_id,
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
    }


    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-iconEmpty .MuiSvgIcon-root ': {
            color: theme.palette.action.disabled,
        },
    }));

    const customIcons = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon
                className='text-6xl'
                color="error" />,
            label: 'Плохо',
        },
        2: {
            icon: <SentimentNeutralIcon color="warning"
                className='text-6xl'
            />,
            label: 'Нормально',
        },

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



    return (<>
        <StyledRating
            max={3}
            value={rating}
            onChange={handleRating}
            // disabled={!report}

            name="highlight-selected-only"
            // defaultValue={4}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
        />
    </>);
}

export default Assessment;