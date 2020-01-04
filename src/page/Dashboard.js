import React, { Component } from 'react';
import fire from '../config/Fire';
import LoginForm from '../components/LoginForm';
import {Grid,Button,TextField} from '@material-ui/core';
import JobCard from '../components/JobCard';

class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user:{},
        }
      }

    render(){
       
            return(
            <div>
                
                <p>Welcome!!</p>
                <h1>Find Job</h1>
                <TextField id="filled-search" label="Search field" type="search" variant="outlined" />
                <p>heve to make search real time</p>
                <JobCard name="Google"/>
                

            </div>);
        
    
    }
}



export default Dashboard;