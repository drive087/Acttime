import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import {Grid,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import fire from '../config/Fire';
import LoginForm from '../components/LoginForm'
import Dashboard from './Dashboard';

class Login extends Component{

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
                window.location.reload();
            }else{
                this.setState({user:null});
            }
        })
    }


    render(){
        
        var user = fire.auth().currentUser;
        
        if (user){
            console.log('login');
            return <Redirect to='.' />;
        }
        
        console.log('Notlogin');
        return (
            <div style={{marginTop:'15%',marginLeft:"40%"}}>
            <LoginForm/>
            </div>
        );



       

        
    }
}



export default Login;