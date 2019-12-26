import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, InputBase, Button ,Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
const RegisterForm = () => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
      <div >
        <Grid direction='column' xs={12} sm={6}>
        <Grid item><TextField id="standard" label="Name" /></Grid>
        <Grid item><TextField id="standard" label="Surname" /></Grid>
        <Grid item><TextField id="standard" label="Username" /></Grid>
        <Grid item><TextField type='password' id="standard" label="Password" /></Grid>
        <Grid item><TextField id="standard" label="Email" /></Grid>
        <Grid item><InputBase  type='date' id="standard" label="Date" style={{marginLeft:'10px',marginTop:'10px'}}/></Grid>
        
        <Button variant='contained' style={{marginTop:'10px',marginLeft:'px'}} color='primary'>Submit</Button>
        </Grid>
      </div>
    </form>
    );
};

export default RegisterForm;