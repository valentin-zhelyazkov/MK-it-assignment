import React from 'react';
import MovieCard from '../components/MovieCard';

const Search = (): React.ReactElement => {
    return (
        <div className="px-10 py-4">
            <MovieCard title={'a'} img={'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg'} genre={'a'} duration={'150'} description={'a'} site={'a'} />
        </div>
    );
}

export default Search;
