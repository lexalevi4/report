import { Divider, Table, TableBody, TableCell, TableContainer, TableRow, Typography, Box, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import Slider from '@mui/joy/Slider';

function Prices({ price, object_id, price_high, price_low, price_max, price_min }) {


    const [min, setMin] = useState(price_min ? price_min : Math.floor(price * 0.8));
    const [low, setLow] = useState(price_low ? price_low : Math.floor(price * 0.9));
    const [current, setCurrent] = useState(Number(price));
    const [high, setHigh] = useState(price_high ? price_high : Math.floor(price * 1.1));
    const [max, setMax] = useState(price_max ? price_max : Math.floor(price * 1.2));


    const handleLow = (value) => {

        setLow(Number(value));

        // console.log(min)
    }




    useEffect(function () {

        if (current < low) {
            setMin(current - ((low - current) / 5))
        } else {
            setMin(Number(low) - ((high - low) / 5))
        }

    }, [min, low])


    useEffect(function () {
        if (current > high) {
            setMax(Number(current) + Number(((current - high) / 5)))
        } else {
            setMax(Number(high) + Number(((Number(high) - Number(low)) / 5)))
        }
    }, [high, max])

    const handleHigh = (value) => {
        setHigh(Number(value));
    }



    const handleChange = (event, newValue) => {
        setCurrent(newValue);
    };

    const handleSubmit = () => {
        let data = new FormData();

        data.append('max', max)
        data.append('high', high)
        // data.append('current', current)

        data.append('low', low)
        data.append('min', min)
        data.append('object_id', object_id)

        try {
            fetch('https://report.turbobroker.ru/report/set-prices', {
                method: 'POST',
                body: data,
            }).then(res => res.json())
            // .then(data => setImages(data.images))
            // setImages_disabled(false);
        } catch (e) {
            // console
        }

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
                Цена
            </Typography>
            <Box
                className="mt-10"

            >
                <TableContainer>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell
                                    width={'50%'}
                                >
                                    <TableContainer>
                                        <Table>
                                            <TableBody>

                                                <TableRow>
                                                    <TableCell>
                                                        <Typography>
                                                            Нижняя граница диапазона

                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography>
                                                            Верхняя граница диапазона
                                                        </Typography>

                                                    </TableCell>
                                                </TableRow>
                                                {/* <TableRow>
                                                    <TableCell>
                                                        <Typography>
                                                            Значение
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <TextField
                                                            value={current}
                                                            onChange={(e) => setCurrent(e.target.value)}
                                                        />
                                                    </TableCell>
                                                </TableRow> */}
                                                <TableRow>
                                                    <TableCell>
                                                        <TextField
                                                            value={low}
                                                            onChange={(e) => handleLow(e.target.value)}
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <TextField
                                                            value={high}
                                                            onChange={(e) => handleHigh(e.target.value)}
                                                        />

                                                    </TableCell>
                                                </TableRow>

                                                <TableRow>
                                                    <TableCell>

                                                    </TableCell>
                                                    <TableCell>
                                                        <Button
                                                            onClick={handleSubmit}
                                                            variant="contained"
                                                        >
                                                            Сохранить
                                                        </Button>
                                                    </TableCell>

                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>



                                </TableCell>
                                <TableCell
                                    width={'50%'}
                                >
                                    <Slider
                                        // width='80%'

                                        marks={[
                                            {
                                                value: low,
                                                label: low.toLocaleString(),
                                            },
                                            {
                                                value: high,
                                                label: high.toLocaleString(),

                                            },
                                        ]}
                                        valueLabelFormat={(val) => {
                                            return val.toLocaleString()

                                        }}
                                        track={false}
                                        step={50000}
                                        disabled={true}
                                        min={min}
                                        max={max}
                                        value={current}
                                        onChange={handleChange}
                                        size={'lg'}
                                        // track="inverted"
                                        valueLabelDisplay="on"
                                    // aria-labelledby="track-inverted-range-slider"
                                    // getAriaValueText={valueText}
                                    // defaultValue={current}
                                    // marks={marks}
                                    />

                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>
        </>
    );
}

export default Prices;