import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { InputLabel, InputBase, Card ,Grid,Button} from '@material-ui/core';
import fire from '../config/Fire';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import '../style.css';
import  { Redirect } from 'react-router-dom';


class ListingjobFormEmployee extends Component{

  constructor(props) {
    super(props);
    this.Jobname = props.Jobname
    this.Jobdes = props.Jobdes; 
    this.Wages = props.Wages;   
    this.Amount = props.Amount
    this.Date = props.Date; 
    this.Begintime = props.Begintime;
    this.Endtime = props.Endtime;
    this.Location = props.Location;
    this.Employee = props.Employee;    
    this.Workkey = props.Workkey;
    this.Currentnumber = props.Currentnumber;
    this.Currentemployer = props.Currentemployer;
    this.Status = props.Status;
    

    this.onGetjob = this.onGetjob.bind(this);

    this.database = fire.database().ref("ListingJob").child(this.Workkey);
   
    
  }
  
  
  onGetjob(){
      var employer2 = this.state.employer;
      var email = fire.auth().currentUser.email;
      var indexofat = email.indexOf('@');
      var subemail = email.substring(0,indexofat);
      var firebaseRef = fire.database().ref('ListingJob').child(this.Workkey);
      var firebaseRef2 = fire.database().ref('ListingJob').child(this.Workkey);
      if(!this.Currentemployer.includes(subemail) ){
        firebaseRef.once('value', snap =>{
        
          var email = fire.auth().currentUser.email;
          var indexofat = email.indexOf('@');
          var subemail = email.substring(0,indexofat);
  
          var oldemp = snap.val()['Currentemployer'];  
          var newemp2 = oldemp + ',' + subemail;
          var newnum2 = snap.val()['Currentnumber']+1;
          
          firebaseRef.update({
              Currentnumber:newnum2,
              Currentemployer:newemp2
          })
           
        });
        
      window.location.reload(false);
    }
    
      
  }

  render(){
    
    return(
      <Card id="ListingJobForm" style={{marginBottom:'20px'}}>
        <div>
          <Grid style={{display:'flex'}}>
            <Grid item md={10}>
            <h1>Title : {this.Jobname}</h1>
            <h3>Description : {this.Jobdes}</h3>
            <p>Wages:{this.Wages}</p>
            <p>{this.Currentnumber}/{this.Amount}</p>
            <p>Date:{this.Date}</p>
            <p>BeginTime:{this.Begintime}</p>
            <p>EndTime:{this.Endtime}</p>
            <p>Location:{this.Location}</p>
            <p>Employee:{this.Employee}</p>
            </Grid>
            <Grid item md={2}>
              <h1>{this.Status}</h1>
            </Grid>
          </Grid>        
        </div>
      
      </Card>
    );
    
}

}

ListingjobFormEmployee.propTypes = {
    Jobname: PropTypes.string,
    Jobdes: PropTypes.string,
    Wages: PropTypes.string,
    Amount: PropTypes.string,
    Date: PropTypes.string,
    Begintime: PropTypes.string,
    Endtime: PropTypes.string,
    Location: PropTypes.string,
    Employee: PropTypes.string,
    Workkey: PropTypes.string,
    Status: PropTypes.string
}
export default ListingjobFormEmployee;