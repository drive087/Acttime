import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { InputLabel, InputBase, Button ,Grid} from '@material-ui/core';
import fire from '../config/Fire';

class LoginForm extends Component{

  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  
  onLogin(){
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    const auth = fire.auth();

    auth.signInWithEmailAndPassword(email,pass).then((u)=>{
        
    }).catch((error) => {
        alert('Please check your email or password');
    });

  

}



  render(){
    return(
        <div>
            <Grid container  alignItems="center" justify="center">
            <Grid md={4} direction='column' alignItems="center" justify="center">
            <h1>Login ACTTIME</h1>
            <Grid item><TextField size="small" id="email" label="Email" variant="outlined" fullWidth /></Grid>
            <Grid item><TextField size="small" id="pass" label="Password" type='password' variant="outlined" style={{marginTop:'10px'}} fullWidth/></Grid>
            <Grid md={12} xs={8} direction='column' style={{marginTop:'10px',marginLeft:'56%'}} justify='flex-end'>
            <Button variant='outlined' color='primary' >Register</Button>
            <Button variant='contained' color='primary' style={{marginLeft:'10px'}} flip onClick={this.onLogin}>Login</Button>
            </Grid>
            </Grid>
            </Grid>
        </div>
    )

    
}

}
export default LoginForm;