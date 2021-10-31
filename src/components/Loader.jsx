import React from 'react'
import { Grid, Container } from '@material-ui/core'
import '../App.css'

const Loader = () => {
    return (
        <Container>
            <Grid container alignItems={"center"} justify={"center"}>
                <Grid>
                    <div class="lds-ripple"><div></div><div></div></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;