import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, InputBase, Button ,Grid} from '@material-ui/core';
import fire from '../config/Fire';
import '../style.css';

class RegisterForm extends Component{

  constructor(props) {
    super(props);
    this.insertData = this.insertData.bind(this);
  }

  insertData() {
    var firebaseRef = fire.database().ref('User');
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var name = document.getElementById('name').value;
    var surname = document.getElementById('sname').value;

    if(email.includes('@') && pass.length >=6){ 

    console.log('1');  
    var indexofat = email.indexOf('@');
    var subemail = email.substring(0,indexofat);

    
    firebaseRef.child(subemail).set('Root');
    var firebaseRefbyemail = fire.database().ref(subemail);
    console.log('2');
    
    firebaseRefbyemail.child('Name').set(name);
    firebaseRefbyemail.child('Password').set(pass);
    firebaseRefbyemail.child('Surname').set(surname);

    // firebaseRefbyemail.push({
    //   Password:pass,
    //   Name:name,
    //   Surname:surname
    // })

  
    

    const auth = fire.auth();

    auth.createUserWithEmailAndPassword(document.getElementById('email').value,document.getElementById('pass').value);
    alert("Registration Success!!");
    
    fire.auth().signOut();

    
  }else{
    alert("Please check your email format and password length must more than 6 character!!");
  }
    
  }





// RegisterForm = () => {
//     const classes = useStyles();

    
  
// <form className={classes.root} noValidate autoComplete="off">
  render(){

    return (
      <form noValidate autoComplete="on" style={{minHeight:"520px"}}>
        <div>
          <Grid container direction='column' xs={12} md={6} id="GridRegister">
            <Grid item><h1>Register</h1></Grid>
          {/* <Grid item><TextField id="user" label="Username" /></Grid> */}
            <Grid item><TextField id="email" fullWidth label="Email" type="email"/></Grid>
            <Grid item><TextField type='password' fullWidth id="pass" label="Password" /></Grid>
          {/* <Grid item><InputBase  type='date' id="standard" label="Date" style={{marginLeft:'10px',marginTop:'10px'}}/></Grid> */}
            <Grid item><TextField id="name" fullWidth label="Name" /></Grid>
            <Grid item><TextField id="sname" fullWidth label="Surname" /></Grid>
            <Button id='ButtonRegister' variant='contained' size='small' style={{marginTop:'10px'}} color='primary' 
            onClick={this.insertData} >Submit</Button>
          </Grid>
        </div>
      </form>
  );
  }
    
// };

  

}
export default RegisterForm;