//@ts-nocheck
import React from 'react';
import MovieCard from '../components/MovieCard';
import MovieDataContext from '../context/MovieDataContext';

const Search = (): React.ReactElement => {
    const { movieData } = React.useContext(MovieDataContext);
    
    return (
        <div className="px-10 py-4">
            {movieData.data?.map((movie, i): any => {
                return (
                    <div key={i}>
                        <MovieCard
                            id={movie.show.id}
                            title={movie.show.name}
                            img={movie.show.image?.original || 'https://st3.depositphotos.com/1322515/35964/v/1600/depositphotos_359648638-stock-illustration-image-available-icon.jpg'}
                            genre={movie.show.genre}
                            duration={movie.show.runtime}
                            description={movie.show.summary}
                            site={movie.show.url}
                        />
                    </div>
                )
            })}
        </div>
    );
}

export default Search;
