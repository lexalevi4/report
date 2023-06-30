import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import YouTubeIcon from '@mui/icons-material/YouTube';
import './../dist/style.css'
import ObjectTable from "./ObjectTable";
import YouTube from 'react-youtube';
function Object({ object }) {


    const [video_active, setVideo_active] = useState(false);





    // console.log(object)
    return (
        <>

            <Paper
                elevation={3}
                className='my-10'
            >
                <ReactImageGallery
                    lazyLoad
                    items={object.images}
                />
            </Paper>
            <Box
                className='items-center flex my-5'
                style={{
                    // display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <Button
                    startIcon={<YouTubeIcon />}
                    variant="contained"
                    onClick={() => setVideo_active(!video_active)}

                >
                    {video_active ? 'Скрыть видео' : "Смотреть видео"}

                </Button>
            </Box>

            {
                video_active && (
                    <Box
                        className='mb-10'
                    >
                        <div className="video">
                            <Paper>
                                <YouTube videoId="HVW7iUzSB40" />
                                {/* <iframe width={'100%'} 
                                src="https://www.youtube.com/embed/HVW7iUzSB40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                            </Paper>
                        </div>
                    </Box>
                )
            }


            {/* https://www.youtube.com/watch?v=HVW7iUzSB40 */}
            <ObjectTable
                object={object}
            />

        </>
    );
}

export default Object;