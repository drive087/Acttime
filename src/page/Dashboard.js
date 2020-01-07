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
            keysearch:"",
            listing:[],
        }
        this.database = fire.database().ref("ListingJob");
      }
    componentDidMount(){
        this.database.on('value', snap =>{
            var list2 = this.state.listing;
            for(var x in snap.val()){
                list2.push(snap.val()[x]);
                
            }         
            
            this.setState({
                listing:list2,
            })
            
        })
    }
    

    render(){
       
            return(
            <div style={{marginTop:'100px',marginLeft:'10%',width:'80%',marginButtom:'100px'}}>
                
                <h1>Welcome!! User</h1>
                <h1>Find Job</h1>
                <TextField id="filled-search" label="Search field" type="search" variant="outlined" fullWidth/>
                <p>heve to make search real time</p>
                

                {this.state.listing.map((data)=>{
                    return (
                        <JobCard Jobname = {data.Jobname}
                        Jobdes = {data.Jobdes}
                        Wages = {data.Wages}
                        Amount = {data.Amount}
                        Date = {data.Date}
                        Begintime = {data.Begintime}
                        Endtime = {data.Endtime}
                        Location = {data.Location}
                        Employee = {data.Employee}/>
                    )
                })}
                    
                    
                    

            </div>);
        
    
    }
}



export default Dashboard;