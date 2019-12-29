import React, { Component } from 'react';
import {Grid,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import fire from '../config/Fire';
import '../style.css';

class ProfileBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user:{},
        }
      }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({ user });
            }else{
                this.setState({user:null});
            }
        })
    }

    onLogout(){
        fire.auth().signOut();
    }

    render(){
        return(
            <div>
                {this.state.user ? (<div>
                <Button variant='contained' id='RegLogOut' color='primary' 
          onClick={this.onLogout} >Logout</Button>
            </div>) : (<div>
                <Grid direction='column' >
                    <Grid item><Button href='/Register' variant='outlined' color='inherit' id='RegLogOut'>Register</Button></Grid>
                    <Grid item><Button href='/login' variant='outlined' color='inherit' id='LoginButton'>Login</Button></Grid>
                </Grid>
            </div>)}
            </div>
        )

        
    }
}



export default ProfileBar;