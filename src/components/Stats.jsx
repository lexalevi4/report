import { Button, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import LinearChart from "./LinearChart";
import { useEffect, useState } from "react";


function Stats({ stats, report = false }) {

    // const data = [{ "date": "2023-04-26", "views_count": 286, "contacts_count": 2, "favorites_count": 29 }, { "date": "2023-04-27", "views_count": 412, "contacts_count": 3, "favorites_count": 37 }, { "date": "2023-04-28", "views_count": 193, "contacts_count": 5, "favorites_count": 18 }, { "date": "2023-04-29", "views_count": 165, "contacts_count": 4, "favorites_count": 9 }, { "date": "2023-04-30", "views_count": 129, "contacts_count": 3, "favorites_count": 10 }, { "date": "2023-05-01", "views_count": 132, "contacts_count": 1, "favorites_count": 12 }, { "date": "2023-05-02", "views_count": 120, "contacts_count": 3, "favorites_count": 9 }, { "date": "2023-05-03", "views_count": 122, "contacts_count": 1, "favorites_count": 11 }, { "date": "2023-05-04", "views_count": 95, "contacts_count": 1, "favorites_count": 8 }, { "date": "2023-05-05", "views_count": 90, "contacts_count": 2, "favorites_count": 8 }, { "date": "2023-05-06", "views_count": 79, "contacts_count": 3, "favorites_count": 6 }, { "date": "2023-05-07", "views_count": 87, "contacts_count": 1, "favorites_count": 5 }, { "date": "2023-05-08", "views_count": 77, "contacts_count": 1, "favorites_count": 6 }, { "date": "2023-05-09", "views_count": 55, "contacts_count": 1, "favorites_count": 3 }, { "date": "2023-05-10", "views_count": 56, "contacts_count": 0, "favorites_count": 4 }, { "date": "2023-05-11", "views_count": 93, "contacts_count": 2, "favorites_count": 9 }, { "date": "2023-05-12", "views_count": 82, "contacts_count": 3, "favorites_count": 4 }, { "date": "2023-05-13", "views_count": 90, "contacts_count": 4, "favorites_count": 8 }, { "date": "2023-05-14", "views_count": 97, "contacts_count": 0, "favorites_count": 8 }, { "date": "2023-05-15", "views_count": 86, "contacts_count": 1, "favorites_count": 5 }, { "date": "2023-05-16", "views_count": 71, "contacts_count": 0, "favorites_count": 5 }, { "date": "2023-05-17", "views_count": 67, "contacts_count": 0, "favorites_count": 4 }, { "date": "2023-05-18", "views_count": 56, "contacts_count": 2, "favorites_count": 5 }, { "date": "2023-05-19", "views_count": 82, "contacts_count": 2, "favorites_count": 10 }, { "date": "2023-05-20", "views_count": 66, "contacts_count": 4, "favorites_count": 3 }, { "date": "2023-05-21", "views_count": 79, "contacts_count": 1, "favorites_count": 4 }, { "date": "2023-05-22", "views_count": 46, "contacts_count": 0, "favorites_count": 2 }, { "date": "2023-05-23", "views_count": 37, "contacts_count": 3, "favorites_count": 1 }, { "date": "2023-05-24", "views_count": 31, "contacts_count": 1, "favorites_count": 0 }, { "date": "2023-05-25", "views_count": 25, "contacts_count": 0, "favorites_count": 0 }, { "date": "2023-05-26", "views_count": 21, "contacts_count": 0, "favorites_count": 0 }, { "date": "2023-05-27", "views_count": 35, "contacts_count": 1, "favorites_count": 0 }, { "date": "2023-05-28", "views_count": 32, "contacts_count": 1, "favorites_count": 2 }, { "date": "2023-05-29", "views_count": 35, "contacts_count": 1, "favorites_count": 5 }, { "date": "2023-05-30", "views_count": 26, "contacts_count": 2, "favorites_count": 0 }, { "date": "2023-05-31", "views_count": 1, "contacts_count": 0, "favorites_count": 0 }, { "date": "2023-06-02", "views_count": 1, "contacts_count": 0, "favorites_count": 0 }, { "date": "2023-06-03", "views_count": 1, "contacts_count": 0, "favorites_count": 0 }, { "date": "2023-06-04", "views_count": 3, "contacts_count": 0, "favorites_count": 1 }, { "date": "2023-06-06", "views_count": 1, "contacts_count": 0, "favorites_count": 0 }, { "date": "2023-06-07", "views_count": 1, "contacts_count": 0, "favorites_count": 0 }, { "date": "2023-06-08", "views_count": 1, "contacts_count": 0, "favorites_count": 1 }, { "date": "2023-06-13", "views_count": 1, "contacts_count": 0, "favorites_count": 0 }, { "date": "2023-06-15", "views_count": 8, "contacts_count": 0, "favorites_count": 3 }, { "date": "2023-06-16", "views_count": 10, "contacts_count": 0, "favorites_count": 2 }, { "date": "2023-06-17", "views_count": 15, "contacts_count": 0, "favorites_count": 2 }, { "date": "2023-06-18", "views_count": 10, "contacts_count": 0, "favorites_count": 0 }, { "date": "2023-06-19", "views_count": 6, "contacts_count": 0, "favorites_count": 2 }];

    // const [avito_active, setAvitoActive] = useState(false)
    // const [cian_active, setCianActive] = useState(false)
    // const [yandex_active, setYandexActive] = useState(false)
    const [srcs, setSrcs] = useState([]);
    const [calls_srcs, setCalls_srcs] = useState([]);
    const [views_series, setViews_series] = useState([]);
    const [calls_series, setCalls_series] = useState([]);
    const [fav_series, setFav_series] = useState([]);
    const [table_data, setTable_data] = useState([]);
    const [views_count, setViews_count] = useState(0);
    const [calls_count, setCalls_count] = useState(0);




    // const [views_data, setViews_data] = useState([]);
    // const [calls_data, setCalls_data] = useState([]);
    // const [fav_data, setFav_data] = useState([]);

    // const srcs = [];
    // const views_series = []
    // const calls_series = []
    // const fav_series = []

    // const avito_active = false;
    // const cian_active = false;
    // const yandex_active = false;
    // const avito_filtered = stats.avito.views.filter(count => count !== null);

    // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



    // console.log(cian_filtered)
    // console.log(cian_filtered.length)


    useEffect(() => {


        let avito_filtered = stats.avito.views.filter(function (n) {
            return n !== null
        })

        let cian_filtered = stats.cian.views.filter(function (n) {
            return n !== null
        })
        let yandex_filtered = stats.yandex.views.filter(function (n) {
            return n !== null
        })

        // console.log(avito_filtered)
        // console.log(cian_filtered)
        // console.log(yandex_filtered)

        let current_srcs = [];
        let current_views_series = []
        let current_calls_series = []
        let current_fav_series = []
        let current_calls_srcs = []
        if (avito_filtered.length > 0) {
            // console.log('avito')
            // setSrcs([...srcs, "Авито"])

            current_srcs.push("Авито");
            // setAvitoActive(true);
            current_views_series.push({
                name: 'Авито',
                data: stats.avito.views,
                type: 'line',
                smooth: true
            })
            // current_calls_series.push({
            //     name: 'Авито',
            //     data: stats.avito.calls,
            //     type: 'line',
            //     smooth: true
            // })
            current_fav_series.push(
                {
                    name: 'Авито',
                    data: stats.avito.favorites,
                    type: 'line',
                    smooth: true
                }
            )
        }



        if (cian_filtered.length > 0) {
            // console.log('cian')
            // setSrcs([...srcs, "Циан"])
            current_srcs.push("Циан");

            // setCianActive(true);
            current_views_series.push({
                name: 'Циан',
                data: stats.cian.views,
                type: 'line',
                smooth: true
            })
            // current_calls_series.push({
            //     name: 'Циан',
            //     data: stats.cian.calls,
            //     type: 'line',
            //     smooth: true
            // })

        }
        if (yandex_filtered.length > 0) {
            // srcs.push("");
            current_srcs.push("Яндекс");
            // setSrcs([...srcs, "Яндекс"])
            // setYandexActive(true)
            current_views_series.push({
                name: 'Яндекс',
                data: stats.yandex.views,
                type: 'line',
                smooth: true
            })
            // current_calls_series.push({
            //     name: 'Яндекс',
            //     data: stats.yandex.calls,
            //     type: 'line',
            //     smooth: true
            // })
        }
        if ((stats.calls).length > 0) {
            stats.calls.map(function (item) {
                current_calls_series.push({
                    name: item.src,
                    // symbolSize: 7,

                    data: item.data,
                    // type: 'scatter',
                    type: 'line',
                    smooth: true
                })
                current_calls_srcs.push(item.src)
            })

        }

        // console.log("тут")
        // console.log(current_srcs)
        // console.log(current_views_series)
        // console.log(current_calls_series)
        setSrcs(current_srcs);
        setViews_series(current_views_series);
        setCalls_series(current_calls_series);
        setFav_series(current_fav_series);
        setCalls_srcs(current_calls_srcs)

        let total_views = 0
        let total_calls = 0
        let total_fav = ''



        let current_table = [];
        if (stats.total.avito_active) {
            let avito_calls_count = 0;
            let avito_calls = stats.calls.filter(function (item) {
                return item.src === 'Авито';
            })
            if (avito_calls.length > 0) {
                avito_calls_count = avito_calls[0].count
            }

            current_table.push({
                'src': "Авито",
                'link': stats.total.avito_url,
                'days': avito_filtered.length,
                'views': stats.total.avito_views_count,
                'calls': avito_calls_count,
                'fav': stats.total.avito_favorites_count
            })
            total_views = total_views + Number(stats.total.avito_views_count)
            total_calls = total_calls + Number(avito_calls_count)
            total_fav = Number(stats.total.avito_favorites_count)
        }
        if (stats.total.cian_active) {
            let cian_calls_count = 0;

            let cian_calls = stats.calls.filter(function (item) {
                return item.src === 'Циан';
            })
            if (cian_calls.length > 0) {
                cian_calls_count = cian_calls[0].count
            }

            current_table.push({
                'src': "Циан",
                'link': stats.total.cian_url,
                'days': cian_filtered.length,
                'views': stats.total.cian_views_count,
                'calls': cian_calls_count || 0,
                'fav': "Н/Д"
            })
            total_views = total_views + Number(stats.total.cian_views_count)
            total_calls = total_calls + Number(cian_calls_count)

        }
        if (stats.total.yandex_active) {

            let yandex_calls_count = 0;
            let yandex_calls = stats.calls.filter(function (item) {
                return item.src === 'Яндекс';
            })
            if (yandex_calls.length > 0) {
                yandex_calls_count = yandex_calls[0].count
            }

            current_table.push({
                'src': "Яндекс",
                'link': stats.total.yandex_url,
                'days': yandex_filtered.length,
                'views': stats.total.yandex_views_count,
                'calls': yandex_calls_count,
                'fav': "Н/Д"
            })
            total_views = total_views + Number(stats.total.yandex_views_count)
            total_calls = total_calls + Number(yandex_calls_count)
        }
        if (stats.total.domclick_active) {
            current_table.push({
                'src': "Домклик",
                'days': "Н/Д",
                'link': stats.total.domclick_url,
                'views': stats.total.domclick_views_count,
                'calls': stats.total.domclick_calls_count,
                'fav': "Н/Д"
            })
            total_views = total_views + Number(stats.total.domclick_views_count)
            total_calls = total_calls + Number(stats.total.domclick_calls_count)
        }

        let additional_srcs = stats.calls.filter(function (item) {
            return (item.src !== 'Авито' && item.src !== 'Циан' && item.src !== 'Яндекс');
        })
        // console.log(additional_srcs)
        additional_srcs.map(function (item) {
            current_table.push({
                'src': item.src,
                'link': null,
                'views': null,
                'calls': item.count,
                'fav': null
            })
            total_calls = total_calls + Number(item.count)
        });

        // if (stats.total.avito_active) {
        //     current_table.push({
        //         'src': "Итого",
        //         'link': null,
        //         'views': total_views,
        //         'calls': total_calls,
        //         'fav': null
        //     })
        // }
        setViews_count(total_views);
        setCalls_count(total_calls);



        setTable_data(current_table)




    }, [stats]

    )



    const views_data = {
        xAxis: {
            type: 'category',
            data: stats.dates
        },

        yAxis: {
            type: 'value',
            minInterval: 1
        },

        legend:
        {
            data: srcs
        },
        series: views_series

    };



    const calls_data = {
        xAxis: {
            type: 'category',
            data: stats.dates
        },

        yAxis: {
            type: 'value',
            minInterval: 1
        },

        legend:
        {
            data: calls_srcs
        },
        series: calls_series
    };

    const fav_data = {
        xAxis: {
            type: 'category',
            data: stats.dates
        },

        yAxis: {
            type: 'value',
            minInterval: 1
        },

        legend:
        {
            data: ['Авито']
        },
        series: fav_series
    };

    // const table_stats = []

    // console.log(srcs)
    // console.log(fav_data)
    // console.log(views_series)

    // if (stats.total.avito_id > 0) {
    //     table_stats.push({
    //         'src': 'Авито',
    //         'data': stats.total.avito
    //     })

    // }




    return (<>

        {
            views_series.length > 0 && (
                <LinearChart key='views_chart' option={views_data}
                    title="Просмотры"
                    count={views_count}
                />
            )


        }

        {
            calls_series.length > 0 && (
                <LinearChart key='calls_chart' option={calls_data}
                    title="Звонки"
                    count={calls_count}
                />
            )

        }

        {
            (fav_series.length > 0 && (!report)) && (
                <LinearChart key='fav_chart' option={fav_data}
                    count={stats.total.avito_favorites_count}
                    title="Избранное"
                />
            )

        }






        <TableContainer component={Paper}  >
            <Table size="small" aria-label="a dense table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell
                            style={{
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Источник
                        </TableCell>


                        <TableCell
                            style={{
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Просмотров
                        </TableCell>
                        <TableCell
                            style={{
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Звонков
                        </TableCell>




                    </TableRow>

                </TableHead>

                <TableBody>
                    {
                        table_data.map(function (item, index) {
                            return (
                                <TableRow key={'stats_table_row' + index}>
                                    <TableCell
                                        style={{
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        <Button
                                            className='p-0'
                                            href={item.link}
                                            target="_blank"
                                            style={{
                                                textDecoration: 'none',
                                                textTransform: 'none',
                                                whiteSpace: 'nowrap'
                                                // color: '#1976d2'

                                            }}
                                        >
                                            {item.src}
                                        </Button>
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {item.views}
                                    </TableCell>

                                    <TableCell
                                        style={{
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {item.calls}
                                    </TableCell>



                                </TableRow>
                            )
                        })

                    }


                </TableBody>
            </Table>
        </TableContainer>
        <Divider />




    </>);
}

export default Stats;