//@ts-nocheck
import React from 'react';
import { Box, Rating, TextField } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import { getDocs, collection, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../database/db';
import { CleaningServicesRounded } from '@mui/icons-material';

const CurMovieDetails = () => {
    const { id } = useParams();

    const [value, setValue] = React.useState<number | null>(0);
    const [note, setNote] = React.useState<string>();
    const [movies, setMovies] = React.useState([]);

    function getMovies() {
        getDocs(collection(db, "movies")).then((fetchedMovies) => {
            for (let movie of fetchedMovies.docs) {
                //@ts-ignore
                const setMovieWithId = { ...movie.data(), movieId: movie.id };
                // //@ts-ignore
                setMovies(prevState => [...prevState, setMovieWithId]);
            }
        })
    }

    React.useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className="px-56 py-10">
            {
                movies
                    .filter((movie) => movie.movieId == id)
                    .map((movie) => {
                        return (<>
                            <MovieCard
                                id={movie.id}
                                title={movie.title}
                                img=
                                {
                                    movie.img ||
                                    'https://st3.depositphotos.com/1322515/35964/v/1600/depositphotos_359648638-stock-illustration-image-available-icon.jpg'
                                }
                                genre={'movie.genre'}
                                duration={movie.duration}
                                description={movie.description}
                                site={movie.site}
                            />
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
                        </>)
                    })
            }
        </div>
    );
};

export default CurMovieDetails;
