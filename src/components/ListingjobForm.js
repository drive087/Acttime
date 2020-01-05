import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { InputLabel, InputBase, Card ,Grid,Button} from '@material-ui/core';
import fire from '../config/Fire';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import '../style.css';


class ListingjobForm extends Component{

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

  }
  
  

  render(){
    return(
      <Card id="ListingJobForm">
        <div>
          <Grid style={{display:'flex'}}>
            <Grid item md={10}>
            <h1>Title : {this.Jobname}</h1>
            <h3>Description : {this.Jobdes}</h3>
            <p>Wages:{this.Wages}</p>
            <p>Limited:{this.Amount}</p>
            <p>Date:{this.Date}</p>
            <p>BeginTime:{this.Begintime}</p>
            <p>EndTime:{this.Endtime}</p>
            <p>Location:{this.Location}</p>
            <p>Employee:{this.Employee}</p>
            </Grid>
            <Grid item md={2}>
              <Button color="secondary" variant="contained">Delete Job</Button>
            </Grid>
          </Grid>        
        </div>
      
      </Card>
    )
}

}

ListingjobForm.propTypes = {
    Jobname: PropTypes.string,
    Jobdes: PropTypes.string,
    Wages: PropTypes.string,
    Amount: PropTypes.string,
    Date: PropTypes.string,
    Begintime: PropTypes.string,
    Endtime: PropTypes.string,
    Location: PropTypes.string,
    Employee: PropTypes.string
}
export default ListingjobForm;