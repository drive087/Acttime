import React, { Component } from 'react';
import fire from '../config/Fire';
import LoginForm from '../components/LoginForm';
import {Grid,Button,TextField} from '@material-ui/core';
import JobCard from '../components/JobCard';
import '../style.css';
class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user:{},
        }
      }

    render(){
       
            return(
            <div style={{marginTop:'100px',marginLeft:'10%',width:'80%',marginButtom:'100px'}}>
                
                <h1>Welcome!! User</h1>
                <h1>Find Job</h1>
                <TextField id="filled-search" label="Search field" type="search" variant="outlined" fullWidth/>
                <p>heve to make search real time</p>
            
                    <JobCard id='JobCard' name="Google" time='14::00 pm' date='13 friday' location='chula' sex='male' price='100 bath' people='10' detail='this is the detail that i want to tell you' />
                    
                    
                    

            </div>);
        
    
    }
}



export default Dashboard;