import React, { useContext } from 'react'
import { Grid, Container, Button } from '@material-ui/core';
import ExitToAppTwoTone from '@material-ui/icons/ExitToAppTwoTone'
import Box from '@material-ui/core/Box'
import { Context } from '../index'
import firebase from 'firebase/compat/app'
const Login = () => {

const {auth} = useContext(Context)

const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const {user} = await auth.signInWithPopup(provider)
}

    return (
        <Container>
            <Grid container alignItems={"center"} justifyContent={"center"}>
                <Grid>
                    <Box p={10}>
                        <Button onClick={login} variant="outlined" endIcon={<ExitToAppTwoTone />}>Sign in with your google account</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;