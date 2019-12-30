import React, { Component } from 'react';
import fire from '../config/Fire';
import LoginForm from '../components/LoginForm';
import {Grid,Button} from '@material-ui/core';

class Dashboard extends Component{

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
                console.log(fire.auth().currentUser.email);
                
            }else{
                this.setState({user:null});
                console.log('logout');
            }
        })
    }


    render(){
        var user = fire.auth().currentUser;
        if(user){
            return(<div>
                <p>Welcome!!</p>
                </div>);
        }
        return(<div>
            <p>Out</p>
            </div>);
       
    }
}



export default Dashboard;