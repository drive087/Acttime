import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, InputBase, Button ,Grid} from '@material-ui/core';
import fire from '../config/Fire';

class RegisterForm extends Component{

  constructor(props) {
    super(props);
    this.insertData = this.insertData.bind(this);
    this.useStyles = this.useStyles.bind(this);
  }

  insertData() {
    var firebaseRef = fire.database().ref('User');
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    if(email.includes('@') && pass.length >=6){ 


    firebaseRef.push({
      Email:document.getElementById('email').value,
      Password:document.getElementById('pass').value,
      Name:document.getElementById('name').value,
      Surname:document.getElementById('sname').value
    });
    console.log(document.getElementById('email').value);
    

    const auth = fire.auth();

    const promise = auth.createUserWithEmailAndPassword(document.getElementById('email').value,document.getElementById('pass').value);
    
    promise
    .catch(e => console.log(e.message));
    alert("Registration Success!!");

    
  }else{
    alert("Please check your email format and password length must more than 6 character!!");
  }
    
  }



useStyles = makeStyles(theme => ({
  root: {
    '& .MuiGrid-root': {
      margin: theme.spacing(1),
      marginInlineStart:'25%',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width:'60%',
    },
    '& .MuiButton-root': {
      margin: theme.spacing(1),
      marginInlineStart:'25%',
    }
  },
  
}));


// RegisterForm = () => {
//     const classes = useStyles();

    
  
// <form className={classes.root} noValidate autoComplete="off">
  render(){

    const classes = this.useStyles;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <div style={{marginLeft:'40%'}}>
          <Grid direction='column' xs={12} sm={6}>
          {/* <Grid item><TextField id="user" label="Username" /></Grid> */}
          <Grid item><TextField id="email" label="Email" type="email"/></Grid>
          <Grid item><TextField type='password' id="pass" label="Password" /></Grid>
          {/* <Grid item><InputBase  type='date' id="standard" label="Date" style={{marginLeft:'10px',marginTop:'10px'}}/></Grid> */}
          <Grid item><TextField id="name" label="Name" /></Grid>
          <Grid item><TextField id="sname" label="Surname" /></Grid>
          <Button variant='contained' style={{marginTop:'10px',marginLeft:'px'}} color='primary' 
          onClick={this.insertData} >Submit</Button>
          </Grid>
        </div>
      </form>
  );
  }
    
// };

  

}
export default RegisterForm;