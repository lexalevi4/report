import { Box, Divider, Grid, Paper, Typography } from "@mui/material";

function SummaryForClients({ plans = '', recomendations = '', result = '' }) {
    return (<>

        <Box
            height={100}
        ></Box>
      
        <Divider
            className="my-10"
        />


        <Box
            className="mt-10"

        >
            <Grid container spacing={2}
            >
                {result && result !== '' && (
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            className='pb-10 pt-5 px-4'
                        >
                            <Typography


                                variant='h6'
                            >
                                Сделано
                            </Typography>
                            <Divider
                                className="my-5"
                            />
                            <Typography
                                style={{
                                    whiteSpace: 'pre-line'
                                }}

                                variant='body1'
                            >
                                {result}
                            </Typography>
                        </Paper>
                    </Grid>
                )
                }
                {plans && plans !== '' && (
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            className='pb-10 pt-5 px-4'
                        >
                            <Typography


                                variant='h6'
                            >
                                Планы
                            </Typography>
                            <Divider
                                className="my-5"
                            />
                            <Typography
                                style={{
                                    whiteSpace: 'pre-line'
                                }}

                                variant='body1'
                            >
                                {plans}
                            </Typography>
                        </Paper>
                    </Grid>
                )
                }
                {recomendations && recomendations !== '' && (
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            className='pb-10 pt-5 px-4'
                        >
                            <Typography


                                variant='h6'
                            >
                                Рекомендации
                            </Typography>
                            <Divider
                                className="my-5"
                            />
                            <Typography
                                style={{
                                    whiteSpace: 'pre-line'
                                }}

                                variant='body1'
                            >
                                {recomendations}
                            </Typography>
                        </Paper>
                    </Grid>
                )
                }


            </Grid>

        </Box>


    </>);
}

export default SummaryForClients;