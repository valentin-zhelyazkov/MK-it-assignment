import React from 'react';
import { db } from '../database/db';
import { collection, getDocs } from "firebase/firestore";
import { Button } from '@mui/material';

const Home = () => {
    const test = async () => {
        const notesSnapshot = await getDocs(collection(db, "movies"));
        const notesList = notesSnapshot.docs.map((doc) => doc.data());
        console.log(notesList);
    }

    return (
    <div>
        <h1 className="text-3xl font-bold underline">dsadsa</h1>
        <Button onClick={test} variant="outlined">Fetch</Button>
    </div>
    );
}

export default Home;
