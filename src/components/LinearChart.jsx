import { Divider, Typography } from "@mui/material";
import ReactECharts from 'echarts-for-react';

function LinearChart({ option, title }) {
    return (
        <>

            <Typography style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}

                variant='h6'
            >{title}</Typography>

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