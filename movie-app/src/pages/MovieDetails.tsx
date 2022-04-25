import React, { useState } from 'react';
import { Box, Rating, TextField } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import MovieDataContext from '../context/MovieDataContext';

const MovieDetails = (): React.ReactElement => {
    const [value, setValue] = useState<number | null>(0);
    const { movieData } = React.useContext(MovieDataContext);
    const { id } = useParams();
    //@ts-ignore
    const movie = movieData.data.find((movie): any => {
        return movie.show.id === Number(id);
    })

    return (
        <div className="px-56 py-10">
            <MovieCard
                id={movie.show.id}
                title={movie.show.name}
                img=
                {
                    movie.show.image?.original ||
                    'https://st3.depositphotos.com/1322515/35964/v/1600/depositphotos_359648638-stock-illustration-image-available-icon.jpg'
                }
                genre={movie.show.genre}
                duration={movie.show.runtime}
                description={movie.show.summary}
                site={movie.show.url}
            />
            <h2 className="pt-24 text-3xl">Your review</h2>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Rating
                    name="simple-controlled"
                    size="large"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </Box>
            <TextField
                multiline={true}
                id="data"
                type="text"
                rows={8}
                sx={{ width: '50%' }}
            />
        </div>
    );
}

export default MovieDetails