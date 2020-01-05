import React from 'react';
import { Card, Grid,Button } from '@material-ui/core';
import '../style.css';
const JobCard = (props) => {
    return (
        <div>
            <Card style={{marginBottom:'20px'}}>
                <Grid style={{display:'flex',padding:'2%'}}>
                    <Grid item md={11}>
                        <h1>{props.name}</h1>
                    
                        <h3>{props.time} {props.location} {props.date}</h3>
                    
                        <h3>{props.sex} {props.price} {props.people}</h3>
                    
                        <p>{props.detail}</p>
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