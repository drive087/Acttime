import './App.css';
import Navbar from './page/Navbar';
import NavbarwithUser from './page/NavbarwithUser';
import React, { Component } from 'react';
import {Grid,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import fire from './config/Fire';

class App extends Component{

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


    render(){
        return(
            <div>
                {this.state.user ? (<NavbarwithUser/>) : (<Navbar/>)}
            </div>
        );

        
    }
}



export default App;