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

    render(){
       
            return(<div>
                <p>Welcome!!</p>
                </div>);
        
    
    }
}



export default Dashboard;