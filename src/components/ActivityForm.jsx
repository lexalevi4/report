import { Box, Button, Input, TextField, Paper, Grid, Typography, Divider } from "@mui/material";
import { useEffect, useState } from "react";

function ActivityForm({ object_id, updateActivity }) {


    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
        setDate(new Date().toISOString().split('T')[0])
        // console.log(date)
    }, [object_id])
    // cons

    const handleSubmit = () => {

        let data = {
            name: name,
            date: date,
            price: price,
            text: text,
            id: 0,
        }
        updateActivity(data)

        setDate(new Date().toISOString().split('T')[0]);
        setName('');
        setPrice(0);
        setText('');


        // updateActivity

    }




    return (<>

        <Box


        >
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
                Добавить активность
            </Typography>

            <Paper
                className=" container mx-auto my-10 py-10"
            >
                <Grid
                    className="my-10"
                    container
                    spacing={2}
                >
                    <Grid
                        className="p-5"
                        item
                    >
                        <TextField
                            required
                            id="new_activity_name"
                            label="Название"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </Grid>
                    <Grid
                        className="p-5"
                        item>

                        <TextField

                            id="outlined-new_activity_price"
                            label="Расход"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}

                        />
                    </Grid>

                    <Grid item
                        className="p-5"
                    >

                        <TextField
                            style={{
                                width: 300
                            }}
                            id="outlined-new_activity_text"
                            label="Описание"
                            value={text}

                            onChange={(e) => setText(e.target.value)}
                            multiline
                            rows={4}
                        />

                    </Grid>

                    <Grid
                        className="p-5"
                        item>

                        <Input
                            label="Дата"
                            value={date}
                            type={"date"}
                            onChange={(e) => setDate(e.target.value)}

                        >
                        </Input>
                    </Grid>


                    <Grid className="p-5"
                        item>

                        <Button
                            disabled={name === '' || name === null}
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Добавить
                        </Button>
                    </Grid>

                </Grid>





            </Paper>

        </Box>

    </>);
}

export default ActivityForm;