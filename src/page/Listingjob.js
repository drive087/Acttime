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
            user:{},
        }
      }

    componentDidMount(){
        this.authListener();
    }

    // componentWillUnmount() {
    //     this.unregisterAuthObserver();
    //   }


    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if (user){
                this.setState({ user });
            }else{
                this.setState({user:null});
            }
        })
    }


    render(){

        var firebaseRef = fire.database().ref("ListingJob");
       

        firebaseRef.once('value').then(function(dataSnapshot){
            var data = dataSnapshot.val()['Work1']['Description'];
            
            console.log(data);
        })

        return(
            <div>
                <p>{}</p>
            </div>
        );

        
    }
}



export default Listingjob;