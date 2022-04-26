import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../database/db';
import { useNavigate } from 'react-router-dom';

const Register = (): React.ReactElement => {
    const [email, setEmail] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const navigate = useNavigate();

    const onRegister = () => {
        createUserWithEmailAndPassword(auth, email as string, password as string)
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
            className="w-6/12 m-auto mt-64"
        >
            <div className="flex flex-col">
                <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value as string)}
                    margin="normal"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value as string)}
                    margin="normal"
                />
                <TextField
                    id="outlined-password-input"
                    label="Repeat Password"
                    type="password"
                    margin="normal"
                />
                <Button onClick={onRegister}>Register</Button>
            </div>
        </Box>
    )
}

export default Register;
