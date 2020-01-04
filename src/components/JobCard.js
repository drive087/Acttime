import React from 'react';
import {Card,Grid} from '@material-ui/core';
const JobCard = (props) => {
    return (
        <div>
            <Card>
                <h1>{props.name}</h1>
                <h3>{props.detail}</h3>
                

            </Card>
        </div>
    );
};

export default JobCard;