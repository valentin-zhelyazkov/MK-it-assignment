import { Card, CardMedia } from '@mui/material';
import React from 'react';

const MovieCard = () : React.ReactElement => {

    return (
            <Card>
                <CardMedia
                    component="img"
                    image="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
                    alt="green iguana"
                    className="max-w-full max-h-full object-cover"
                />
            </Card >
    );
}

export default MovieCard;