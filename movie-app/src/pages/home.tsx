import React from 'react';
import { auth, db } from '../database/db';
import { collection, getDocs } from "firebase/firestore";
import { Box, Button, ImageList, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MovieDataContext from '../context/MovieDataContext';

const Home = (): React.ReactElement => {
    const [movies, setMovies] = React.useState([]);

    function getMovies() {
        getDocs(collection(db, "movies")).then((fetchedMovies) => {
            for (let movie of fetchedMovies.docs) {
                //@ts-ignore
                if (auth.currentUser.uid === movie.data().userID) {
                    //@ts-ignore
                    setMovies(prevState => [...prevState, movie.data()]);
                }
            }
        })

    }

    React.useEffect(() => {
        getMovies();
    }, [])

    return (
        <>
            <div className="relative">
                <Box
                    component="img"
                    className="w-screen h-96"
                    alt="The house from the offer."
                    src="https://t4.ftcdn.net/jpg/03/98/67/05/360_F_398670578_qfihCy61VOBGpuvWolQ8U87H2cqmeJ8L.jpg"
                />
                <Box
                    className="w-screen h-96 absolute top-0"
                >
                    <div className="flex flex-col justify-center h-full w-1/3 pl-12">
                        <h1 className="text-white font-extrabold text-2xl">Seach your favourite movies</h1>
                        <p className="text-white py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, est!</p>
                        <Button variant="contained" className="w-24">
                            <Link to="/search">
                                Search
                            </Link>
                        </Button>
                    </div>
                </Box>
            </div>
            <h2 className="w-full text-center mt-6 text-4xl font-bold">Your Favourites</h2>
            <ImageList sx={{ width: '80%', height: 450, margin: '20px auto' }} cols={4} gap={25}>
                {movies.map((item, index) => (
                    <ImageListItem key={index}>
                        <img
                            //@ts-ignore
                            src={item.img}
                            alt={item}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}

export default Home;
