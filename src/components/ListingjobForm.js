import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { InputLabel, InputBase, Button ,Grid} from '@material-ui/core';
import fire from '../config/Fire';
import PropTypes from 'prop-types';

class ListingjobForm extends Component{

  constructor(props) {
    super(props);
    this.Employee = props.Employee
    this.Description = props.Description; 
    this.Date = props.Date;    

  }
  
  

  render(){
    return(
        <div>
            <p>{this.Employee}</p>
            <p>{this.Description}</p>
            <p>{this.Date}</p>
        </div>
    )

    
}

}

ListingjobForm.propTypes = {
    Employee: PropTypes.string,
    Description: PropTypes.string,
    Date: PropTypes.string
}
export default ListingjobForm;