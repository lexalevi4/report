import { Badge, Divider, Typography } from "@mui/material";
import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from "react";

function LinearChart({ option, title, count = 0 }) {


    const [counter, setCounter] = useState('')

    useEffect(() => {
        if (count > 0) {
            setCounter(' (' + count + ')')
        }

    }, [count])

    return (
        <>

            <Typography style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}

                variant='h6'
            >

                {title + counter}
            </Typography>

            <Divider
                className="mt-3"

            ></Divider>




            <ReactECharts

                // className="mt-3 p-5"
                option={option}
            >

            </ReactECharts>

        </>
    );
}

export default LinearChart;