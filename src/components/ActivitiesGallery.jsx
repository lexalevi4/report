import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { ReactComponent as RigthNav } from '../images/rigth.svg';
import { ReactComponent as LeftNav } from '../images/left.svg';
function ActivitiesGallery({ activities }) {

    const [active_count, setActive_count] = useState(0);
    const [images, setImages] = useState([]);
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    // onSlide

    useEffect(() => {

        let active = activities.filter(function (item) {
            return item.active === 1;
        })
        let gallery = [];
        // let description = [];
        if (active.length > 0) {
            setText(active[0].text)
            setPrice(active[0].price)
            setName(active[0].name)
            setActive_count(active.length)
            active.map((item, index) => {
                item.images.map((image) => {
                    gallery.push({
                        id: image.id,
                        original: image.full,
                        thumbnail: image.thumb,
                        desc: item.text,
                        name: item.name,
                        price: item.price
                    })

                })

            })
        }
        setImages(gallery)
        // console.log(images)

    }, [activities])


    const handleSlide = (currentIndex) => {
        setText(images[currentIndex].desc)
        setPrice(images[currentIndex].price)
        setName(images[currentIndex].name)

    }
    if (active_count === 0) {
        return (
            <>
            </>
        )
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
                Работа по вашему объекту
            </Typography>


            <Box
                className='items-center flex my-5 justify-center'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Grid container>
                    <Grid item xs={12} md={4}></Grid>

                    <Grid item xs={12} md={4}
                    >
                        <Paper
                            elevation={3}
                            className='pb-10 pt-5 px-4'
                        >
                            <Typography
                                variant="h6"
                            >
                                {name}
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
                                {text}
                            </Typography>
                            {price > 0 && (
                                <Typography
                                    className="mt-3 mb-5"
                                >
                                    {
                                        'Расходы: ' + price
                                    }
                                </Typography>
                            )}
                            {images.length > 0 && (



                                <div
                                    className="mt-3 mb-5">
                                    <Paper>

                                        <ReactImageGallery
                                            onSlide={handleSlide}

                                            // showNav={false}
                                            lazyLoad
                                            showFullscreenButton={false}
                                            // showThumbnails={showThumb}
                                            showPlayButton={false}
                                            items={images}
                                            renderRightNav={(onClick, disabled) => (
                                                <button
                                                    style={{ width: 24, height: 48, paddingRight: 25, top: '50%' }}
                                                    type="button"
                                                    className="image-gallery-icon image-gallery-right-nav"
                                                    // disabled={disabled}
                                                    onClick={onClick}
                                                // aria-label="Previous Slide"
                                                >
                                                    <RigthNav style={{ width: 24, height: 48, }} />
                                                </button>

                                            )}
                                            renderLeftNav={(onClick, disabled) => (
                                                <button
                                                    style={{ width: 24, height: 48, top: '50%', }}
                                                    type="button"
                                                    className="image-gallery-icon image-gallery-left-nav"
                                                    disabled={disabled}
                                                    onClick={onClick}
                                                    aria-label="Previous Slide"
                                                >
                                                    <LeftNav style={{ width: 24, height: 48, padding: null }} />
                                                </button>

                                            )}

                                        />



                                    </Paper>
                                </div>

                            )}


                        </Paper>
                    </Grid>

                </Grid>

            </Box>




        </>
    );
}

export default ActivitiesGallery;