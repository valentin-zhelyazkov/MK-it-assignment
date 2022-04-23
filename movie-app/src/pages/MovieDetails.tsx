import React, { useState } from 'react';
import { Box, Rating, TextField } from '@mui/material';
import MovieCard from '../components/MovieCard';

const MovieDetails = (): React.ReactElement => {
    const [value, setValue] = useState<number | null>(0);

    return (
        <div className="px-56 py-10">
            {/* <MovieCard key={'a'}  title={'a'} img={'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg'} genre={['a', 'b']} duration={'150'} description={'a'} site={'a'} /> */}
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