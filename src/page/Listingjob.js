import React, { Component } from 'react';
import {Grid,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import fire from '../config/Fire';
import LoginForm from '../components/LoginForm'
import Dashboard from './Dashboard';
import ListingjobForm from '../components/ListingjobForm';

class Listingjob extends Component{

    constructor(props) {
        super(props);
        this.state = {
            listing:[],
        }

        this.database = fire.database().ref("ListingJob");
      }

    
    componentWillMount(){
        this.database.on('value', snap =>{
            var list2 = this.state.listing;
            for(var x in snap.val()){
                list2.push(snap.val()[x]);
                
            }
           
            
            this.setState({
                listing:list2,
            })
            
        })
    }


    render(){

        return(
            <div>
                {
            this.state.listing.map((note) => {
              return (
                <ListingjobForm Employee = {note.Employee}
                Description={note.Description}
                Date={note.Date} />
              )
            })
          }
            </div>
        );

        
    }
}



export default Listingjob;