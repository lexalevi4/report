import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ActivitiesSettingsTableRow from "./ActivitiesSettingsTableRow";
import { useState } from "react";
import ActivityForm from "./ActivityForm";

function ActivitiesSettings({ basic_activities, object_id }) {

    const [activities, setActivities] = useState(basic_activities)


    // console.log(object_id)


    const deleteActivity = async (id) => {
        // try {

        await fetch('https://report.turbobroker.ru/report/delete-activity', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                object_id: object_id
                // tg_data: window.Telegram.WebApp.initData || null
            })
        })
            .then((response) => response.json())
            .then(
                (data) => {
                    // console.log(data);
                    // if (data.task === 'new') {
                    // activities.push(data.activity)
                    setActivities(data.activities);
                    // }else{}
                }

                // setIsFav(!isFav)
            )
        // } catch (e) {
        //     console.log(e)

        // }
    }

    const updateActivity = async (data) => {

        try {
            await fetch('https://report.turbobroker.ru/report/update-activity', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    data: data,
                    object_id: object_id
                    // tg_data: window.Telegram.WebApp.initData || null
                })
            })
                .then((response) => response.json())
                .then(
                    (data) => {
                        // console.log(data);
                        // if (data.task === 'new') {
                        // activities.push(data.activity)
                        setActivities(data.activities);
                        // }else{}
                    }

                    // setIsFav(!isFav)
                )
        } catch (e) {
            console.log(e)

        }

    }

    const empty_activity = {
        id: 0,
        "name": null,
        "text": '',
        "status": 1,
        "date": new Date().toISOString().split('T')[0],
        "price": 0
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
            >
                Активность
            </Typography>

            <TableContainer
                component={Paper}
            >
                <Table
                // component={'paper'}
                >
                    <TableHead>
                        <TableRow>

                            <TableCell

                                align="center"
                                width={80}
                            >
                                Статус
                            </TableCell>
                            <TableCell
                                width={180}
                                align="center"
                            >
                                Название
                            </TableCell>

                            <TableCell
                                width={180}
                                align="center"
                            >
                                Расход
                            </TableCell>

                            {/* <TableCell
                                align="center"
                                width={150}
                            >
                                Статус
                            </TableCell> */}

                            <TableCell
                                align="center"
                                width={150}
                            >
                                Дата
                            </TableCell>
                            <TableCell
                                align="center"
                            // width={50}
                            >
                                Изображения
                            </TableCell>

                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {
                            activities.map(function (activity, index) {
                                return (
                                    <ActivitiesSettingsTableRow
                                        deleteActivity={deleteActivity}
                                        key={'acivity_' + index}
                                        activity={activity}
                                        updateActivity={updateActivity}
                                    />
                                )
                            })
                        }
                        {/* <ActivitiesSettingsTableRow
                            key={'acivity_new'}
                            activity={empty_activity}
                            updateActivity={updateActivity}
                            create={true}
                        /> */}
                    </TableBody>
                </Table>
            </TableContainer>

            <ActivityForm
                updateActivity={updateActivity}
            />
        </>
    );
}

export default ActivitiesSettings;