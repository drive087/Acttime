import React, { Component } from 'react';
import {Grid,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import fire from '../config/Fire';


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
                <Button variant='contained' style={{marginLeft:'600%'}} color='primary' 
          onClick={this.onLogout} >Logout</Button>
            </div>) : (<div>
                    <Button href='/Register' variant='outlined' color='inherit' style={{marginLeft:'600%'}}>Register</Button>
                    <Button href='/login' variant='outlined' color='inherit' style={{marginLeft:'500%'}}>Login</Button>
            </div>)}
            </div>
        )

        
    }
}



export default ProfileBar;