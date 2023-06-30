import { Divider, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { ReactComponent as RigthNav } from '../images/rigth.svg';
import { ReactComponent as LeftNav } from '../images/left.svg';
// import SVG from 'react-image-gallery/src/SVG'
// import 'react-image-gallery/styles/css/image-gallery.css'
// import 'image-gallery.css'  from 'r'

function ActivityCard({ activity }) {
    const [images, setImages] = useState([]);
    const [showThumb, setShowThumb] = useState(false);

    useEffect(() => {
        let images_arr = []
        activity.images.map(function (item, index) {
            images_arr.push(
                {
                    id: item.id,
                    original: item.full,
                    thumbnail: item.thumb,
                    title:'Баннер',
                    description :"hfchfc\nasdfasdf asdfasdf\nasdfasdf"
            
                }
            )
        })
        if (images_arr.length > 1) {
            setShowThumb(true)
        }
        setImages(images_arr)
    }, [activity])

    return ((

        <Grid item xs={12} md={4}
        >
            <Paper
                elevation={3}
                className='pb-10 pt-5 px-4'
            >
                <Typography
                    variant="h6"
                >
                    {activity.name}
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
                    {activity.text}
                </Typography>
                {activity.price > 0 && (
                    <Typography
                        className="mt-3 mb-5"
                    >
                        {
                            'Расходы: ' + activity.price
                        }
                    </Typography>
                )}
                {images.length > 0 && (



                    <div
                        className="mt-3 mb-5">
                        <ReactImageGallery

                            // showNav={false}
                            lazyLoad
                            showFullscreenButton={false}
                            showThumbnails={showThumb}
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
                    </div>

                )}


            </Paper>
        </Grid>
    ));
}

export default ActivityCard;