import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../database/db';
import { useNavigate } from 'react-router-dom';

const Register = (): React.ReactElement => {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const navigate = useNavigate();

    const onRegister = () => {
        //@ts-ignore
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/login');
            })
            .catch((error) => {
                
            });
    }

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            className="w-6/12 m-auto"
        >
            <div className="flex flex-col">
                <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="text"
                    //@ts-ignore
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    //@ts-ignore
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    id="outlined-password-input"
                    label="Repeat Password"
                    type="password"
                />
                <Button onClick={onRegister}>Register</Button>
            </div>
        </Box>
    )
}

export default Register;
