import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import Assessment from "./Assessment";

function AssessmentsList({ assessments }) {


    if (assessments.length === 0) {
        return (<>
        </>)
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
            Оценки клиента
        </Typography>


        <Paper
            className='my-10 p-2 items-center flex'
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Stack>
                {
                    assessments.map((item, index) => {
                        return (

                            <Grid
                                key={'assessment_' + index}
                                container
                                spacing={4}
                            >
                                <Grid
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                    item
                                >
                                    <Typography>
                                        {new Date(item.timestamp * 1000).toLocaleString()}
                                    </Typography>
                                </Grid>
                                <Grid
                                    item
                                >
                                    <Assessment
                                        assessment={item}
                                    />
                                </Grid>
                            </Grid>
                        )

                    })
                }
            </Stack >
        </Paper>

    </>);
}

export default AssessmentsList;