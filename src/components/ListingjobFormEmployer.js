import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { InputLabel, InputBase, Card ,Grid,Button} from '@material-ui/core';
import fire from '../config/Fire';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import '../style.css';
import  { Redirect } from 'react-router-dom';


class ListingjobFormEmployer extends Component{

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

    this.state ={
      checkgetjobalready:false,
      
    }

    this.onDeletejob = this.onDeletejob.bind(this);
    this.onStartjob = this.onStartjob.bind(this);
    this.onFinishjob = this.onFinishjob.bind(this);

    this.database = fire.database().ref("ListingJob").child(this.Workkey);
   
    
  }
  
  
  onDeletejob(){
      var email = fire.auth().currentUser.email;
      var indexofat = email.indexOf('@');
      var firebaseRef = fire.database().ref('ListingJob')
      
      firebaseRef.child(this.Workkey).remove();
        console.log('delete success');
      window.location.reload(false);
    
      
  }

  onStartjob(){
    var firebaseRef = fire.database().ref('ListingJob')
    
    firebaseRef.child(this.Workkey).update({
      Status:'In Duty'
    })
    window.location.reload(false);
}

  onFinishjob(){
    var email = fire.auth().currentUser.email;
    var indexofat = email.indexOf('@');
    var firebaseRef = fire.database().ref('ListingJob')
    
    firebaseRef.child(this.Workkey).update({
      Status:'Finish'
    })
    window.location.reload(false);
  }


  render(){
    
      var email = fire.auth().currentUser.email;
      var indexofat = email.indexOf('@');
      var subemail = email.substring(0,indexofat);
      if(this.Employee.includes(subemail)){
        if(this.Status == 'In Duty'){
            return(
              <Card id="ListingJobForm">
                <div>
                  <Grid style={{display:'flex'}}>
                    <Grid item md={10}>
                    <h1>Title : {this.Jobname}</h1>
                    <h3>Description : {this.Jobdes}</h3>
                    <p>Wages:{this.Wages}</p>
                    <p>Date:{this.Date}</p>
                    <p>BeginTime:{this.Begintime}</p>
                    <p>EndTime:{this.Endtime}</p>
                    <p>Location:{this.Location}</p>
                    <p>Employee:{this.Employee}</p>
                    </Grid>
                    <Grid item md={2}>
                      <h1>{this.Status}</h1>
                      <h1>{this.Currentnumber}/{this.Amount}</h1>
                      <Button variant="contained" color="primary" onClick={this.onFinishjob} style={{marginTop:'10%'}}>Finish</Button>
                      
                    </Grid>
                  </Grid>        
                </div>
              
              </Card>
          );
        }
        if(this.Status == 'Finish'){
          return(
            <Card id="ListingJobForm">
              <div>
                <Grid style={{display:'flex'}}>
                  <Grid item md={10}>
                  <h1>Title : {this.Jobname}</h1>
                  <h3>Description : {this.Jobdes}</h3>
                  <p>Wages:{this.Wages}</p>
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
        return(
            <Card id="ListingJobForm">
              <div>
                <Grid style={{display:'flex'}}>
                  <Grid item md={10}>
                  <h1>Title : {this.Jobname}</h1>
                  <h3>Description : {this.Jobdes}</h3>
                  <p>Wages:{this.Wages}</p>
                  <p>Date:{this.Date}</p>
                  <p>BeginTime:{this.Begintime}</p>
                  <p>EndTime:{this.Endtime}</p>
                  <p>Location:{this.Location}</p>
                  <p>Employee:{this.Employee}</p>
                  </Grid>
                  <Grid item md={2}>
                    <h1>{this.Status}</h1>
                    <h1>{this.Currentnumber}/{this.Amount}</h1>
                    <Button variant="contained" color="primary" onClick={this.onStartjob} style={{marginTop:'10%'}}>Start Job</Button>
                    <Button variant="contained" color="secondary" onClick={this.onDeletejob} style={{marginTop:'10%'}}>Delete Job</Button>
                    
                  </Grid>
                </Grid>        
              </div>
            
            </Card>
        );
      
      
      
    }
    
    
}

}

ListingjobFormEmployer.propTypes = {
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
export default ListingjobFormEmployer;