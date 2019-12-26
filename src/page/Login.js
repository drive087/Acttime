import React from 'react';
import {Grid,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
const Login = () => {
    return (
        <div>
            <Grid container  alignItems="center" justify="center">
            <Grid md={4} direction='column' alignItems="center" justify="center">
            <h1>Login ACTTIME</h1>
            <Grid item><TextField size="small" id="outlined-basic" label="Username" variant="outlined" fullWidth /></Grid>
            <Grid item><TextField size="small" id="outlined-basic" label="Password" type='password' variant="outlined" style={{marginTop:'10px'}} fullWidth/></Grid>
            <Grid md={12} xs={8} direction='column' style={{marginTop:'10px',marginLeft:'56%'}} justify='flex-end'>
                <Button variant='outlined' color='primary' >Register</Button>
                <Button variant='contained' color='primary' style={{marginLeft:'10px'}} flip>Login</Button>
            </Grid>

            </Grid>
            </Grid>
        </div>
    );
};

export default Login;