import React from 'react';
import { Box, Rating, TextField } from '@mui/material';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import MovieDataContext from '../context/MovieDataContext';
import { getDocs, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../database/db';

const MovieDetails = (): React.ReactElement => {
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
        </div>
    );
}

export default MovieDetails;
