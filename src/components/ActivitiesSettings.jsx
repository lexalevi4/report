import { Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ActivitiesSettingsTableRow from "./ActivitiesSettingsTableRow";
import ActivitiesSettingsTableRowCreate from "./ActivitiesSettingsTableRowCreate";
import { useState } from "react";

function ActivitiesSettings({ basic_activities, object_id }) {

    const [activities, setActivities] = useState(basic_activities)


    console.log(object_id)
    const updateActivity = (data) => {

        fetch('https://report.turbobroker.ru/report/update-activity', {
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
                    console.log(data);
                    if (data.task === 'new') {
                        // activities.push(data.activity)
                        setActivities([...activities, data.activity]);
                    }
                }

                // setIsFav(!isFav)
            )

    }

    const empty_activity = {
        id:0,
        "name":null,
        "text":null,
        "status":1,
        "date":null,
        "price":null
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
                                align="center"
                            >
                                Расход
                            </TableCell>

                            <TableCell
                                align="center"
                                width={150}
                            >
                                Статус
                            </TableCell>

                            <TableCell
                                align="center"
                                width={150}
                            >
                                Дата
                            </TableCell>
                            <TableCell
                                align="center"
                                width={50}
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
                                        key={'acivity_' + index}
                                        activity={activity}
                                        updateActivity={updateActivity}
                                    />
                                )
                            })
                        }
                        <ActivitiesSettingsTableRow
                            key={'acivity_new'}
                            activity={empty_activity}
                            updateActivity={updateActivity}
                            create={true}
                        />
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default ActivitiesSettings;