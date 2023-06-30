import { Box, Paper, TableContainer, Table, TableBody, TableRow, TableCell, Button } from "@mui/material"
import { useEffect, useState } from "react"
import parse, { attributesToProps } from 'html-react-parser';

function ObjectTable({ object }) {

    const [params, setParams] = useState([])

    const [showDesc, setShowDesc] = useState(false);

    useEffect(() => {
        console.log(object.fields)

        let table = []
        let addrr_field = object.fields.filter((item) => {
            return (item.alias === 'address');
        })
        // console.log(addrr_field)
        if (addrr_field.length > 0) {
            table.push({
                name: "Адрес",
                value: JSON.parse(addrr_field[0].value).replace(/^Россия, /gi, '')

            })
        }

        table.push({
            name: "Цена",
            value: object.price.toLocaleString(),
        })

        let rooms_count_field = object.fields.filter((item) => {
            return (item.alias === 'rooms_count');
        })
        // console.log(addrr_field)
        if (rooms_count_field.length > 0) {
            table.push({
                name: "Количество комнат",
                value: rooms_count_field[0].value

            })
        }

        let bedrooms_count_field = object.fields.filter((item) => {
            return (item.alias === 'BedroomsCount');
        })
        // console.log(addrr_field)
        if (bedrooms_count_field.length > 0) {
            table.push({
                name: "Количество спален",
                value: bedrooms_count_field[0].value

            })
        }


        let total_area = '';
        let living_area = '';
        let kithchen_area = '';


        let total_square_field = object.fields.filter((item) => {
            return (item.alias === 'total_square');
        })
        // console.log(addrr_field)
        if (total_square_field.length > 0) {
            total_area = total_square_field[0].value
        }

        let living_square_field = object.fields.filter((item) => {
            return (item.alias === 'square');
        })
        // console.log(addrr_field)
        if (living_square_field.length > 0) {
            living_area = living_square_field[0].value
        }

        if (total_area !== '' || living_area !== '' || kithchen_area !== '') {

            table.push({
                name: "Площадь",
                value: total_area + " / " + living_area + " / " + kithchen_area

            })


        }


        let area_square_field = object.fields.filter((item) => {
            return (item.alias === 'area_square');
        })
        // console.log(addrr_field)
        if (area_square_field.length > 0) {
            table.push({
                name: "Площадь участка (сот)",
                value: area_square_field[0].value

            })
        }


        let wall_material_field = object.fields.filter((item) => {
            return (item.alias === 'wall_material');
        })
        // console.log(addrr_field)
        if (wall_material_field.length > 0) {
            table.push({
                name: "Материал стен",
                value: wall_material_field[0].value

            })
        }

        let year_built_field = object.fields.filter((item) => {
            return (item.alias === 'year_built');
        })
        // console.log(addrr_field)
        if (year_built_field.length > 0) {
            table.push({
                name: "Год постройки",
                value: year_built_field[0].value

            })
        }




        setParams(table);
        // console.log(table);

    }, [object])

    return (<>

        <Box
            // className='items-center flex'
            style={{
                // display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}
        >
            <Paper
                elevation={3}
                className='mb-10'
            >
                <TableContainer component={Paper}>
                    <Table
                        size="small"
                    >
                        <TableBody>
                            {
                                params.map((item, index) => {
                                    return (
                                        <TableRow key={'object_params_' + index}>
                                            <TableCell>
                                                {item.name}
                                            </TableCell>
                                            <TableCell>
                                                {item.value}
                                            </TableCell>
                                        </TableRow>
                                    )

                                })
                            }
                            <TableRow>
                                <TableCell
                                    colSpan={2}
                                >
                                    <span
                                        style={{
                                            display: showDesc ? '' : 'none'
                                        }}
                                    >
                                        {
                                            parse(object.description)
                                        }
                                    </span>
                                    <Box
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',

                                        }}
                                    >
                                        <Button
                                            variant="text"
                                            onClick={() => setShowDesc(!showDesc)}

                                        >
                                            {showDesc ? 'Скрыть описание' : 'Показать описание'}


                                        </Button>
                                    </Box>

                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>

    </>);
}

export default ObjectTable;