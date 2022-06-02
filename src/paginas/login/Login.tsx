import React from 'react';
import './Login.css';
import { Grid, Box, Typography } from '@material-ui/core';

function Login() {

    return(
        <Grid container>
            <Grid xs={6}>
                <Box>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3'> Entrar </Typography>
                    </form>
                </Box>
            </Grid >
            <Grid xs={6}>
                 
            </Grid>
        </Grid>
    );
}

export default Login;