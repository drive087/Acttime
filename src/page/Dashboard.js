import React, { Component } from 'react';
import fire from '../config/Fire';
import {Grid,Button} from '@material-ui/core';

class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user:{},
        }
      }

    


    render(){
        return(
            <div>
                Hello Fucking User!!
            </div>
        )
    }
}



export default Dashboard;