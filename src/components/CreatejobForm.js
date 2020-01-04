import React, { useState } from 'react';
import { TextField, Grid ,Button, TextareaAutosize} from '@material-ui/core';
const CreatejobForm = () => {

    const [jobValues, setJobValues] = useState({
        Jobname: '',
        location: '',
        time1: '',
        time2: '',
        date1: '',
        date2: '',
        price: 0,
        people: 0,
        sex: '',
        detail: ''
    });

    const handleOnChange = event => {
        const { name, value } = event.target;
        setJobValues({ ...jobValues, [name]: value });
        console.log(jobValues);
    };
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
                        <TextField name='time1' variant="outlined" type='time' onChange={handleOnChange} />
                        <h3>to</h3>
                        <TextField name='time2' variant="outlined" type='time' onChange={handleOnChange} />
                        <h3>Date :</h3>
                        <TextField name='date1' variant="outlined" type='date' onChange={handleOnChange} />
                        <h3>to</h3>
                        <TextField name='date2' variant="outlined" type='date' onChange={handleOnChange} />
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
};

export default CreatejobForm;