import React from 'react';
import { Box, Rating, TextField } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import MovieDataContext from '../context/MovieDataContext';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../database/db';

const MovieDetails = (): React.ReactElement => {
    const [value, setValue] = React.useState<number | null>(0);
    const [note, setNote] = React.useState<string>();
    const { movieData } = React.useContext(MovieDataContext);
    const [movies, setMovies] = React.useState();

    const { id } = useParams();
    //@ts-ignore
    const movie = movieData.data.find((movie) => {
        return movie.show.id === Number(id);
    });
    //@ts-ignore
    const updateMovieRating = async (rating) => {
        //@ts-ignore
        const curMovie = movies.find((ratingMovie) => {
            return ratingMovie.id === movie.show.id
        });

        const userDoc = doc(db, "movies", curMovie.movieId);
        const newFields = { rating: rating };
        await updateDoc(userDoc, newFields);
    };

    //@ts-ignore
    const updateMovieNote = async (note) => {
        //@ts-ignore
        const curMovie = movies.find((noteMovie) => {
            return noteMovie.id === movie.show.id
        });

        const userDoc = doc(db, "movies", curMovie.movieId);
        const newFields = { note: note };
        await updateDoc(userDoc, newFields);
    };

    React.useEffect(() => {
        const getMovies = async () => {
            //@ts-ignore
            const data = await getDocs(collection(db, 'movies'));
            //@ts-ignore
            setMovies(data.docs.map((doc) => ({ ...doc.data(), movieId: doc.id })));
        }
        getMovies();
    }, []);

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
                        updateMovieRating(newValue);
                    }}
                />
            </Box>
            <TextField
                multiline={true}
                id="data"
                type="text"
                rows={8}
                sx={{ width: '50%' }}
                onChange={(e) => updateMovieNote(e.target.value)}
            />
        </div>
    );
}

export default MovieDetails;
