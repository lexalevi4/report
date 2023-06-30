import { Slider } from "@mui/joy";
import { Divider, Typography } from "@mui/material";

function PricesForClient({ current, min, max, low, high }) {
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
            Анализ цены
        </Typography>
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
            // onChange={handleChange}
            size={'lg'}
            // track="inverted"
            valueLabelDisplay="on"
        // aria-labelledby="track-inverted-range-slider"
        // getAriaValueText={valueText}
        // defaultValue={current}
        // marks={marks}
        />

    </>);
}

export default PricesForClient;