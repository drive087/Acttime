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
        this.database = fire.database().ref("ListingJob").orderByChild('/Jobname');
      }
    fetchData(){
        var list2 = [];
        
        this.database.on('value', snap =>{
            console.log(snap);
            var list2 = snap.val().filter((data) => {
                return data.Jobname.indexOf(this.state.keysearch)!==-1;
            });
            /*for(var x in snap.val()){
                
                    list2.push(snap.val()[x]);
                }*/
            
            this.setState({
                listing:list2,
            })
            console.log(list2);
            
        })
    }
    componentDidMount(){
     
    }
    componentDidUpdate(prevProps,prevState){

        if (prevState.keysearch != this.state.keysearch){
            this.fetchData()
            
        }
        

    }
    

    render(){
       
            return(
            <div style={{marginTop:'100px',marginLeft:'10%',width:'80%',marginButtom:'100px'}}>
                
                <h1>Welcome!! User</h1>
                <h1>Find Job</h1>
                {this.state.keysearch}
                <TextField id="filled-search" label="Search field" type="search" variant="outlined" fullWidth onChange={(e)=>{
                    this.setState({keysearch:e.target.value});
                }}/>
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