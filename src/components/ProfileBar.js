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
        var user = fire.auth().currentUser;
        if(user){
            return(<div>
                <p>{fire.auth().currentUser.email}</p>
                <Button variant="outlined" color="inherit" style={{}}  
                onClick={this.onLogout} >Logout</Button>
            </div>);
        }
        return(<div>
            <Button href='/Register' variant='outlined' color='inherit' style={{}}>Register</Button>
            <Button href='/login' variant='outlined' color='inherit' style={{}}>Login</Button>
        </div>);






        

        
    }
}



export default ProfileBar;