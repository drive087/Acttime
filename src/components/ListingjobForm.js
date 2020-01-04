import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { InputLabel, InputBase, Button ,Grid} from '@material-ui/core';
import fire from '../config/Fire';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



class ListingjobForm extends Component{

  constructor(props) {
    super(props);
    this.Jobname = props.Jobname
    this.Jobdes = props.Jobdes; 
    this.Wages = props.DatWagese;   
    this.Amount = props.Amount
    this.Date = props.Date; 
    this.Employee = props.Employee;    

  }
  
  

  render(){
    return(
      <Grid container spacing={1}>
        <div>
            <p>{this.Jobname}</p>
            <p>{this.Jobdes}</p>
            <p>{this.Wages}</p>
            <p>{this.Amount}</p>
            <p>{this.Date}</p>
            <p>{this.Employee}</p>
        </div>
      
      </Grid>
    )
}

}

ListingjobForm.propTypes = {
    Jobname: PropTypes.string,
    Jobdes: PropTypes.string,
    Wages: PropTypes.string,
    Amount: PropTypes.string,
    Date: PropTypes.string,
    Employee: PropTypes.string
}
export default ListingjobForm;