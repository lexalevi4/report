import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import YouTubeIcon from '@mui/icons-material/YouTube';
import './../dist/style.css'
import ObjectTable from "./ObjectTable";
import YouTube from 'react-youtube';
import Video from "./Video";
function Object({ object }) {



    const [youtube, setYoutube] = useState('');

    useEffect(() => {
        // console.log(object.fields)
        let youtube_field = object.fields.filter((item) => {
            return (item.alias === 'YouTube');
        })
        // console.log(addrr_field)
        if (youtube_field.length > 0) {
            let temp_val = youtube_field[0].value;
            temp_val = temp_val.replace(/https:\/\/youtu.be\//gi, '')
            temp_val = temp_val.replace(/\?.+/gi, '')
            temp_val = temp_val.replace(/\//gi, '')

            setYoutube(temp_val)
        }

    }, [object])



    // console.log(object)
    return (
        <>


            <Paper
                elevation={3}
                className='my-10'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ReactImageGallery
                
                    lazyLoad
                    items={object.images}
                />
            </Paper>

            {youtube != '' && (
                <Video
                    youtube={youtube}
                />
            )}

            {/* https://www.youtube.com/watch?v=HVW7iUzSB40 */}
            <ObjectTable
                object={object}
            />

        </>
    );
}

export default Object;