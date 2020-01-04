import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { InputLabel, InputBase, Button ,Grid} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import fire from '../config/Fire';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

class CreatejobForm extends Component{

  constructor(props) {
    super(props);
    this.onCreatejob = this.onCreatejob.bind(this);
    this.state = {
        selectedDate: null,
    }
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
  
  handleDateChange = date => {
    
    
        const newdate = this.formatDate(date);
        this.setState({
            selectedDate: newdate
        })
    
}
 
  
  onCreatejob(){
    var jobname = document.getElementById('jobname').value;
    var jobdes = document.getElementById('jobdescription').value;
    var wages = document.getElementById('wages').value;
    var amount = document.getElementById('amount').value;
    var date = this.state.selectedDate;
    const auth = fire.auth();

    var firebaseRef = fire.database().ref('ListingJob');
  
    firebaseRef.push({
        Jobname:jobname,
        Jobdes:jobdes,
        Wages:wages,
        Amount:amount,
        Date:date,
        Employee:auth.currentUser.email
      });

    }



  render(){
    
    return (
        <div style={{ marginTop: '100px', marginBottom: '100px',paddingLeft:'25%' }}>
            <h1>Create Job</h1>
            <form>
                <Grid xs={12} md={8}>
                    <Grid style={{ margin: '16px',display:'flex',direction:'column' }}>
                        <h3>Jobname : </h3>
                        <TextField name='Jobname' label="Jobname" variant="outlined" style={{marginLeft:'20px'}}onChange={handleOnChange} />
                    </Grid>
                    <Grid style={{ margin: '16px',display:'flex',direction:'column' }}>
                        <h3>Time :</h3>
                        <TextField name='time1' variant="outlined" type='time'  />
                        <h3>to</h3>
                        <TextField name='time2' variant="outlined" type='time'  />
                        <h3>Date :</h3>
                        <TextField name='date1' variant="outlined" type='date'  />
                        <h3>to</h3>
                        <TextField name='date2' variant="outlined" type='date' />
                    </Grid>
                    <Grid style={{ margin: '16px' }}>
                        <TextField name='price' label="Price" variant="outlined" type='number' onChange={handleOnChange} />
                        <TextField name='people' label="People" variant="outlined" type='number' style={{marginLeft:'16px'}} onChange={handleOnChange} />
                        <TextField name='location' label="location" variant="outlined" style={{marginLeft:'16px'}} onChange={handleOnChange} />
                    </Grid>
                    <Grid style={{ margin: '16px' }}>
                        <h3>Detail :</h3>
                        <TextareaAutosize rowsMin={10} style={{width:'100%'}} name='detail' label="Detail" variant="outlined" onChange={handleOnChange} />
                    </Grid>
                    <Grid style={{ margin: '16px',right:'0px',float:'right'}}>
                    <Button variant="contained" color="primary" style={{}}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
    
    
    return(
        <div>
            <Grid container alignItems="center" justify="center">
            <Grid direction='column' alignItems="center" justify="center">
            <h1>Create Job</h1>
            <Grid item><p>Title</p><TextField size="small" id="jobname" variant="outlined" fullWidth /></Grid>
            <Grid item><p>Description</p><TextField size="medium" id="jobdescription" variant="outlined" fullWidth/></Grid>
            <Grid item><p>Wages</p><TextField size="small" id="wages" variant="outlined" label='Baht' fullWidth/></Grid>
            <Grid item><p>Amount</p><TextField size="small" id="amount" variant="outlined" fullWidth/></Grid>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="center">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Select Work Date"
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        /> &nbsp;&nbsp;&nbsp;&nbsp;
                        

                    </Grid>
            </MuiPickersUtilsProvider>
            
            <Grid sm={12} xs={8} direction='column' style={{marginTop:'10px',marginLeft:'56%'}} justify='flex-end'>
            <Button variant='contained' color='primary' style={{marginLeft:'10px'}} flip onClick={this.onCreatejob}>Submit</Button>
            </Grid>
            </Grid>
            </Grid>
        </div>
    )
    

    
}

}
export default CreatejobForm;