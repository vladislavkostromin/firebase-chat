import React from 'react'
import { Grid, Container } from '@material-ui/core'
import '../App.css'

const Loader = () => {
    return (
        <Container>
            <Grid container style={{height: 500}} alignItems={"center"} justifyContent={"center"}>
                <Grid>
                    <div className="lds-ripple"><div></div><div></div></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;