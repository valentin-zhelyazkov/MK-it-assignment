import React from 'react';
import { db } from '../database/db';
import { collection, getDocs } from "firebase/firestore";
import { Box, Button } from '@mui/material';

const Home = () => {
    const test = async () => {
        const notesSnapshot = await getDocs(collection(db, "movies"));
        const notesList = notesSnapshot.docs.map((doc) => doc.data());
        console.log(notesList);
    }

    return (
        <>
            <Box
                component="img"
                className="w-screen h-96 absolute -z-1"
                alt="The house from the offer."
                src="https://t4.ftcdn.net/jpg/03/98/67/05/360_F_398670578_qfihCy61VOBGpuvWolQ8U87H2cqmeJ8L.jpg"
            />
            <Box
                className="w-screen h-96 absolute"
            >
                <div className="flex flex-col justify-center h-full w-1/3 pl-12">
                    <h1 className="text-white font-extrabold text-2xl">Seach your favourite movies</h1>
                    <p className="text-white py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, est!</p>
                    <Button variant="contained" className="w-24">Search</Button>
                </div>
            </Box>
            <p>sgefa</p>
        </>
    );
}

export default Home;
