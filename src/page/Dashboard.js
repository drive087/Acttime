import React, { Component } from 'react';
import fire from '../config/Fire';
import LoginForm from '../components/LoginForm';
import {Grid,Button,TextField} from '@material-ui/core';
import JobCard from '../components/JobCard';
import '../style.css';
import ListingjobForm from '../components/ListingjobForm';

class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user:{},
            listing:[],
        }
        this.database = fire.database().ref("ListingJob");
      }


    componentWillMount(){
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
                <div style={{marginLeft:'15%',marginTop:'5%'}}>
                <h1>Listing Job</h1>
                {
            this.state.listing.map((notes) => {
              return (
              <div>
                <ListingjobForm 
                Jobname = {notes.Jobname}
                Jobdes = {notes.Jobdes}
                Wages = {notes.Wages}
                Amount = {notes.Amount}
                Date = {notes.Date}
                Begintime = {notes.Begintime}
                Endtime = {notes.Endtime}
                Location = {notes.Location}
                Employee = {notes.Employee}
                Workkey = {notes.Workkey}
                Currentnumber = {notes.Currentnumber}
                Currentemployer = {notes.Currentemployer}
                />
                <br/>
                </div>
                    )
                })
                }
            </div>
                    <JobCard id='JobCard' name="Google" time='14::00 pm' date='13 friday' location='chula' sex='male' price='100 bath' people='10' detail='this is the detail that i want to tell you' />
                    
                    
                    

            </div>);
        
    
    }
}



export default Dashboard;