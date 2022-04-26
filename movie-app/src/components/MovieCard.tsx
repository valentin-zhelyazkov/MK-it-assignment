import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../database/db';
import { db } from '../database/db';
import { collection, addDoc } from "firebase/firestore";

type CardProps = {
    id: number
    title: string,
    img: string,
    genre: string[],
    duration: string,
    description: string,
    site: string,
};

const MovieCard = ({ id, title, img, genre, duration, description, site }: CardProps): React.ReactElement => {
    const onSave = async () => {
        const userID = auth.currentUser?.uid;
        const movie = {
            id,
            title,
            img,
            duration,
            description,
            site,
            userID,
            isAdd: false,
            rating: 0,
            note: '',
        }

        await addDoc(collection(db, 'movies'), movie);
    }

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={img}
                alt="Movie image"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Link to={`/details/${id}`}>
                        <Typography component="div" variant="h5">
                            {title}
                        </Typography>
                    </Link>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {genre} | {duration}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {description}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        <a href={site}>Visit official site</a>
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    {true ?
                        <Button variant="outlined" onClick={onSave}>Add To Favourite</Button> :
                        <Button variant="outlined" onClick={onSave}>Remove From Favourite</Button> 
                    }
                </Box>
            </Box>
        </Card>
    );
}

export default MovieCard;