import React from 'react';
import { Card, Grid,Button } from '@material-ui/core';
import '../style.css';
const JobCard = (props) => {
    return (
        <div>
            <Card style={{marginBottom:'20px'}}>
                <Grid style={{display:'flex',padding:'2%'}}>
                    <Grid item md={11}>
                        <h1>{props.Jobname}</h1>
                    
                        <h2>{props.Jobdes}</h2>
                        <h3>Wage : {props.Wages} Amount : {props.Amount}</h3>
                    
                        <h3>Date : {props.Date}
                        <br/> Time : {props.Begintime} to {props.Endtime}</h3>

                        <p>{props.Location}</p>
                        <p>{props.Employee}</p>
                    </Grid>
                    <Grid item md={2}>
                        <Button id="GetJob">Get this Job</Button>
                    </Grid>
                </Grid>

            </Card>
        </div>
    );
};

export default JobCard;