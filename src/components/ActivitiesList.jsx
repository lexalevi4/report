import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import ReactImageGallery from "react-image-gallery";
import ActivityCard from "./ActivityCard";
import { useEffect, useState } from "react";

function ActivitiesList({ activities }) {


    const [active_count, setActive_count] = useState(0);
    useEffect(() => {
        // let count = 0;
        let active = activities.filter(function (item) {
            return item.active === 1;
        })
        if (active.length > 0) {
            setActive_count(active.length)
        }


    }, [activities])

    if (active_count === 0) {
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
        >
            Работа по вашему объекту
        </Typography>
        <Box

        >

            <Grid
                container spacing={2}
            >
                {activities.map(function (activity, index) {
                    if (activity.active === 1) {
                        return (


                            <ActivityCard
                                activity={activity}
                                key={'activity_item_+' + index}
                            />

                        )
                    }


                })
                }
            </Grid>
        </Box>



    </>);
}

export default ActivitiesList;