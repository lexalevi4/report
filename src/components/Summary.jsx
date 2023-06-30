import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Summary({ report_result, report_plans, report_recomendations, object_id }) {

    const [result, setResult] = useState(report_result)
    const [plans, setPlans] = useState(report_plans)
    const [recomendations, setRecomendations] = useState(report_recomendations)



    const handleSubmit = () => {
        let data = new FormData();

        data.append('result', result)
        data.append('plans', plans)
        // data.append('current', current)

        data.append('recomendations', recomendations)

        data.append('object_id', object_id)

        try {
            fetch('https://report.turbobroker.ru/report/set-text', {
                method: 'POST',
                body: data,
            }).then(res => res.json())
            // .then(data => setImages(data.images))
            // setImages_disabled(false);
        } catch (e) {
            // console
        }

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
            Итоги
        </Typography>
        <Box
            className="mt-10"

        >
            <Grid container spacing={2}
            >
                <Grid item xs={12} md={4}>
                    <Box>
                        <TextField
                            rows={5}
                            label="Итоги"
                            value={result}
                            onChange={(e) => setResult(e.target.value)}
                            multiline
                            // maxRows={8}
                            fullWidth

                        />

                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box>
                        <TextField
                            rows={5}
                            label="Планы"
                            value={plans}
                            onChange={(e) => setPlans(e.target.value)}
                            multiline
                            // maxRows={8}
                            fullWidth

                        />

                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box
                        className="text-end"
                    >
                        <TextField
                            rows={5}
                            label="Рекомендации"
                            value={recomendations}
                            onChange={(e) => setRecomendations(e.target.value)}
                            multiline
                            // maxRows={8}
                            fullWidth

                        />
                        <Button
                            onClick={handleSubmit}
                            className="mt-5 text-end"
                            variant="contained"
                        >Сохранить</Button>
                    </Box>
                </Grid>

            </Grid>

        </Box>
    </>);
}

export default Summary;
