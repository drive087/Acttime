import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import {Grid,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import fire from '../config/Fire';
import LoginForm from '../components/LoginForm'
import Dashboard from './Dashboard';
import { Container } from '@material-ui/core';
import RegisterForm from '../components/RegisterForm';

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
                this.render();

            }else{
                this.setState({user:null});
            }
        })
    }


    render(){
        
        var user = fire.auth().currentUser;
        
        if (user){
            console.log('login');
            return <Redirect to='/dashboard'  />;
        }
        else{
            console.log('Notlogin');
            return (<div>
                <Container>
                    <h1>Login</h1>
                    <LoginForm/>
                </Container>
            </div>);
        }
        
        



       

        
    }
}



export default Login;