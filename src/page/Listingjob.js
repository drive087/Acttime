import React, { Component } from 'react';
import {Grid,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import fire from '../config/Fire';
import LoginForm from '../components/LoginForm'
import Dashboard from './Dashboard';

class Listingjob extends Component{

    constructor(props) {
        super(props);
        this.state = {
            data:{},
        }
      }

 

    

    callData(){
        var firebaseRef = fire.database().ref("ListingJob");
       

        firebaseRef.once('value').then(function(dataSnapshot){
            var data1 = dataSnapshot.val()['Work1']['Description'];
            console.log(data1);
            
        })
    }


    render(){

        this.callData();

        return(
            <div>
                <p>{}</p>
            </div>
        );

        
    }
}



export default Listingjob;