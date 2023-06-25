import { Box, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ReactImageGallery from "react-image-gallery";


function Object({ object }) {




    console.log(object)
    return (
        <>
            <Typography
                variant="h3"
            >
                {object.name}
            </Typography>
            <ReactImageGallery
                lazyLoad
                items={object.images}
            />;
        </>
    );
}

export default Object;