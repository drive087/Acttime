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

    onLogout(){
        fire.auth().signOut();
    }


    render(){
        return(
            <div>
                <Button variant='contained' style={{marginTop:'10px',marginLeft:'px'}} color='primary' 
          onClick={this.onLogout} >Logout</Button>
            </div>
        )
    }
}



export default Dashboard;