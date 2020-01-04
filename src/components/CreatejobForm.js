import React, { useState } from 'react';
import { TextField, Grid } from '@material-ui/core';
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
        <div style={{ marginTop: '100px', marginBottom: '100px' }}>
            <h1>Create Job</h1>
            <form>
                <Grid>
                    <Grid container>
                    <TextField name='Jobname' label="Jobname" variant="outlined" onChange={handleOnChange}/>
                    </Grid>
                    <Grid>
                    <TextField name='time1' variant="outlined" type='time' onChange={handleOnChange}/>
                    <TextField name='time2' variant="outlined" type='time' onChange={handleOnChange}/>
                    <TextField name='date1' variant="outlined" type='date' onChange={handleOnChange}/>
                    <TextField name='date2' variant="outlined" type='date' onChange={handleOnChange}/>
                    </Grid>
                    <Grid>
                    <TextField name='price' label="Price" variant="outlined" type='number' onChange={handleOnChange}/>
                    <TextField name='people' label="People" variant="outlined" type='number' onChange={handleOnChange}/>
                    <TextField name='location' label="location" variant="outlined" onChange={handleOnChange}/>
                    </Grid>
                    <Grid>
                    <TextField name='detail' label="Detail" variant="outlined" onChange={handleOnChange}/>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default CreatejobForm;