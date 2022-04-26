//@ts-nocheck
import React from 'react';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import MovieDataContext from '../context/MovieDataContext';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../database/db';

const MovieDetails = (): React.ReactElement => {
    const { movieData } = React.useContext(MovieDataContext);
    const [movies, setMovies] = React.useState();

    const { id } = useParams();

    const movie = movieData.data.find((movie) => {
        return movie.show.id === Number(id);
    });

    React.useEffect(() => {
        const getMovies = async () => {
            const data = await getDocs(collection(db, 'movies'));
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
