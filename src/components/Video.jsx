import { Box, Button, Paper } from "@mui/material";
import { useState } from "react";
import YouTube from 'react-youtube';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Video({ youtube }) {


    const [video_active, setVideo_active] = useState(false);

    return (<>
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
                            <YouTube

                                videoId={youtube} />
                            {/* <iframe width={'100%'} 
                                src="https://www.youtube.com/embed/HVW7iUzSB40" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        </Paper>
                    </div>
                </Box>
            )
        }

    </>);
}

export default Video;