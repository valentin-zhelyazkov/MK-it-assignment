//@ts-nocheck
import React from 'react';
import { Box, Rating, TextField } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import { getDocs, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../database/db';

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

    const updateRating = async (id, rating) => {
        const userDoc = doc(db, "movies", id);
        const newFields = { rating: rating };
        await updateDoc(userDoc, newFields);
    };

    const updateNote = async (id, note) => {
        const userDoc = doc(db, "movies", id);
        const newFields = { note: note };
        await updateDoc(userDoc, newFields);
    };

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
                                genre={'genre'}
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
                                    defaultValue={movie.rating}
                                    onChange={(event, rating) => {
                                        setValue(rating);
                                        updateRating(id, rating)
                                    }}
                                />
                            </Box>
                            <TextField
                                multiline={true}
                                id="data"
                                type="text"
                                rows={8}
                                sx={{ width: '50%' }}
                                defaultValue={movie.note}
                                onChange={(e) => updateNote(id, e.target.value)}
                            />
                        </>)
                    })
            }
        </div>
    );
};

export default CurMovieDetails;
