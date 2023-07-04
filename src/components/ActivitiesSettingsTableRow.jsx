import { Box, Button, ButtonGroup, ClickAwayListener, Grow, IconButton, ImageList, ImageListItem, ImageListItemBar, Input, LinearProgress, MenuItem, MenuList, Paper, Popper, Select, Switch, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
// import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useForm } from "react-hook-form"
import { Controller } from "react-hook-form";
import MyTextInput from "./form/MyTextInput";
import dayjs from "dayjs";
import { MuiFileInput } from "mui-file-input";

// const itemData = [
//     {
//         img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//         title: 'Bed',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//         title: 'Books',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//         title: 'Sink',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//         title: 'Kitchen',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//         title: 'Blinds',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//         title: 'Chairs',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//         title: 'Laptop',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//         title: 'Doors',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//         title: 'Coffee',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//         title: 'Storage',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//         title: 'Candle',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//         title: 'Coffee table',
//     },
// ];


function ActivitiesSettingsTableRow({ activity, create = false, object_id = 0, updateActivity, deleteActivity }) {

    const [status, setStatus] = useState(Number(activity.status));
    const [active, setActive] = useState(Boolean(activity.active));
    const [files, setFiles] = useState(null);
    const [images, setImages] = useState(activity.images);
    const [images_disabled, setImages_disabled] = useState(false);
    const [name, setName] = useState(activity.name);
    const [date, setDate] = useState(activity.date);
    const [price, setPrice] = useState(activity.price);
    const [text, setText] = useState(activity.text);
    const [available, setAvailable] = useState(true);


    const handleDelete = () => {

        const conf = window.confirm(`Удалить?`);
        if (conf) {
            deleteActivity(activity.id)
            setAvailable(false)
        }
    }




    const delImage = async (id) => {
        const conf = window.confirm(`Удалить?`);
        if (conf) {
            let data = new FormData();
            data.append('activity', activity.id)
            data.append('image_id', id)

            await fetch('https://report.turbobroker.ru/report/del-activity-image', {
                method: 'POST',
                body: data,
            }).then(res => res.json())
                .then(data => setImages(data.images))
        }

    }



    const handleFileChange = async (value) => {
        setImages_disabled(true)
        // console.log(value)
        // console.log(images_disabled)

        let data = new FormData();
        for (const file of value) {
            data.append('files[]', file, file.name);
        }
        data.append('activity', activity.id)
        try {
            await fetch('https://report.turbobroker.ru/report/upload-activity-images', {
                method: 'POST',
                body: data,
            }).then(res => res.json())
                .then(data => setImages(data.images))
            setImages_disabled(false);
        } catch (e) {
            // console
        }
    }

    const {
        register,
        formState: {
            errors,
        },
        control,
        isValid,
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur',
        // rules: {

        //     price: { pattern: /\d+/g, message: "Должно" },
        // },
        values: {
            name: activity.name,
            price: activity.price,
            text: activity.text,
            date: activity.date,
            id: activity.id,
            object_id: object_id,
            // status: activity.status
        }

        // defaultValues: {

        // }
    },

    )

    // console.log(control._formState.isValid)


    // console.log(control._fields);

    // console.log(control._formState.isValid)
    const onSubmit = (data) => {
        // console.log(data)
        updateActivity(data)
        // if (create) {
        //     // control._fields
        //     // reset()
        // }
    }


    const activeSwitchHandle = async (e) => {
        // console.log(e)
        let data = new FormData();

        data.append('activity', activity.id)
        data.append('status', e ? 1 : 0)
        try {
            await fetch('https://report.turbobroker.ru/report/set-activity-active', {
                method: 'POST',
                body: data,
            }).then(res => res.json())
            // .then(data => setImages(data.images))
            // setImages_disabled(false);
        } catch (e) {
            // console
        }


        setActive(e)



    }

    const statuses = [
        { name: 'Запланировано', id: 1 },
        { name: 'В работе', id: 2 },
        { name: 'Выполнено', id: 3 },
        { name: 'Отменено', id: 4 },

    ]
    // window.control = control

    if (!available) {
        return (<></>)
    }


    return (
        <>


            <TableRow>
                <TableCell>
                    <Switch
                        edge="end"
                        onChange={(e) => activeSwitchHandle(e.target.checked)}
                        checked={active}
                    />
                </TableCell>
                <TableCell>


                    <Controller
                        name="name"

                        control={control}

                        rules={{
                            validate: {
                                required: (value) => {
                                    if (!value) return 'Обязательное поле';
                                },

                            },
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <TextField
                                label="Название"
                                // color="warning"
                                id="outlined-multiline-flexible"
                                // defaultValue={activity.name}
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}

                                fullWidth
                                {...rest}
                            />
                        )}
                    />
                    {errors?.name && (
                        <Typography

                        >
                            {errors?.name.message}
                        </Typography>
                    )}


                    {/* <MyTextInput
                        name={activity.name}
                        message="Обязательное поле"
                        required={true}
                        // onChange={() => { console.log(e.target.value) }}


                    /> */}


                </TableCell>
                <TableCell>

                    <Controller
                        name="price"
                        control={control}
                        rules={{
                            validate: {
                                // required: (value) => {
                                //     if (!value) return 'Обязательное поле';
                                // },
                                pattern: (value) => {
                                    let string = String(value)
                                    if (string.match(/\D/gi)) return 'Должно быть числом';
                                }
                            },
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <TextField
                                label="Расход"
                                id="outlined-multiline-flexible"
                                // defaultValue={activity.price}
                                fullWidth
                                {...rest}
                            />
                        )}
                    />
                    {errors?.price && (
                        <Typography

                        >
                            {errors?.price.message}
                        </Typography>
                    )}





                </TableCell>
                {/* <TableCell>

                    <Controller
                        name="status"

                        control={control}
                        rules={{
                            validate: {
                                required: (value) => {
                                    if (!value) return 'Обязательное поле';
                                },

                            },
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            <Select
                                // color="warning"
                                // id="outlined-multiline-flexible"
                                defaultValue={status}
                                label="Статус"
                                value={status}
                                fullWidth
                                {...rest}
                            >
                                {statuses.map((option, index) => (
                                    <MenuItem
                                        value={option.id}

                                        key={'select_' + option.name}
                                        // disabled={index === 2}

                                        selected={index === status}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                        {option.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                    {errors?.status && (
                        <Typography

                        >
                            {errors?.status.message}
                        </Typography>
                    )}


               
                </TableCell> */}
                <TableCell>

                    <Controller
                        name="date"

                        control={control}
                        defaultValue={activity.date}
                        rules={{
                            validate: {
                                required: (value) => {
                                    if (!value) return 'Обязательное поле';
                                },

                            },
                        }}
                        render={({ field: { ref, ...rest } }) => (
                            // <DatePicker />
                            <Input
                                label="Дата"
                                defaultValue={activity.date}
                                type="date"
                                {...rest}
                            >
                            </Input>
                        )}
                    />
                    {errors?.date && (
                        <Typography
                            defaultValue={activity.date}

                        >
                            {errors?.date.message}
                        </Typography>
                    )}



                </TableCell>
                <TableCell>
                    <Button
                        type="submit"
                        onClick={handleSubmit(onSubmit)}
                        disabled={Object.keys(control._formState.errors).length > 0}
                    >

                        Сохранить
                    </Button>
                </TableCell>
                <TableCell>
                    <Button
                        color="error"
                        // type="submit"
                        onClick={handleDelete}
                    // disabled={Object.keys(control._formState.errors).length > 0}
                    >

                        Удалить
                    </Button>
                </TableCell>
            </TableRow>
            <TableRow
                className="align-top align-right"
            >
                <TableCell
                    className="align-top"
                    colSpan={4}
                >
                    <Controller
                        name="text"
                        control={control}
                        // rules={{
                        //     validate: {
                        //         required: (value) => {
                        //             if (!value) return 'Обязательное поле';
                        //         },
                        //         // pattern: (value) => {
                        //         //     let string = String(value)
                        //         //     if (string.match(/\D/gi)) return 'Должно быть числом';
                        //         // }
                        //     },
                        // }}
                        render={({ field: { ref, ...rest } }) => (
                            <TextField
                                id="outlined-multiline-flexible"
                                // label="Инфо по расклейке"
                                // placeholder='Инфо по расклейке'
                                label="Текст"
                                rows={14}
                                // value={activity.text}
                                // onChange={(e) => setAdsResult(e.target.value)}
                                multiline
                                // maxRows={8}
                                fullWidth
                                {...rest}
                            />

                        )}
                    />
                    {/* <TextField
                        id="outlined-multiline-flexible"
                        // label="Инфо по расклейке"
                        // placeholder='Инфо по расклейке'
                        rows={14}
                        value={activity.text}
                        // onChange={(e) => setAdsResult(e.target.value)}
                        multiline
                        // maxRows={8}
                        fullWidth
                    /> */}

                </TableCell>
                <TableCell
                    colSpan={3}
                >

                    {!create && (
                        <>
                            <Box
                                className='mb-5'
                                sx={{ width: '100%', height: 400, overflowY: 'scroll' }}>
                                <ImageList variant="masonry" cols={2} gap={8}>
                                    {images.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <ImageListItemBar
                                                sx={{
                                                    background:
                                                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                                                        'rgba(0,0,0,00) 70%, rgba(0,0,0,0) 0%)',
                                                }}
                                                // title={item.title}
                                                position="top"
                                                actionIcon={
                                                    <IconButton
                                                        onClick={() => delImage(item.id)}
                                                        sx={{ color: 'red' }}
                                                        aria-label={`del ${item.title}`}
                                                    >
                                                        <DeleteIcon />
                                                    </IconButton>
                                                }
                                                actionPosition="right"
                                            />

                                            <img
                                                src={`${item.thumb}?w=248&fit=crop&auto=format`}
                                                srcSet={`${item.thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Box>

                            {
                                images_disabled && (
                                    <Box sx={{ width: '100%' }}>
                                        <LinearProgress />
                                    </Box>
                                )
                            }
                            <Box
                                className='text-end mb-5'

                            >
                                <MuiFileInput
                                    multiple
                                    disabled={images_disabled}
                                    value={files}
                                    onChange={handleFileChange}
                                />
                                {/* <input
                                    accept="image/*"
                                    // className={classes.input}
                                    style={{ display: 'none' }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" component="span"
                                    // className={classes.button}
                                    >
                                        Загрузить изображения
                                    </Button>
                                </label> */}
                            </Box>
                        </>
                    )}

                </TableCell>
            </TableRow>

        </>
    );
}

export default ActivitiesSettingsTableRow;