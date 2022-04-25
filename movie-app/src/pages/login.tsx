//@ts-nocheck
import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../database/db';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const navigate = useNavigate();

    const onLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/');
            })
            .catch((error) => {
            });
    }

    return (
        <Box
            component="form"
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
                <Button onClick={onLogin}>Login</Button>
            </div>
        </Box>
    )
}

export default Login;
