import React from 'react';
import { Card, Grid,Button } from '@material-ui/core';
const JobCard = (props) => {
    return (
        <div>
            <Card>
                <Grid>
                    <Grid item>
                        <h1>{props.name}</h1>
                    </Grid>
                    <Grid>
                        <h3>{props.time} {props.location} {props.date}</h3>
                    </Grid>
                    <Grid>
                        {props.sex} {props.price} {props.people}
                    </Grid>
                    <Grid>
                        {props.detail}
                    </Grid>
                    <Grid>
                        <Button>Get this Job</Button>
                    </Grid>
                </Grid>

            </Card>
        </div>
    );
};

export default JobCard;