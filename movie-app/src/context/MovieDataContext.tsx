import React, { useState } from 'react';
interface IMovieDataContext {
  movieData: {};
  populateMovieData: React.SetStateAction<{}>;
}
const defaultState = {
  movieData: {},
  populateMovieData: () => {},
};

const MovieDataContext = React.createContext<IMovieDataContext>(defaultState);
type MocieDataProps = {
  children: React.ReactNode;
};
export const MovieDataProvider = ({ children }: MocieDataProps) => {
  const [movieData, setMovieData] = useState(defaultState.movieData);
  const populateMovieData = (data: React.SetStateAction<{}>) => {
    setMovieData(data);
  };

  return (
    <MovieDataContext.Provider
      value={{
        movieData,
        populateMovieData,
      }}
    >
      {children}
    </MovieDataContext.Provider>
  );
};

export default MovieDataContext;
