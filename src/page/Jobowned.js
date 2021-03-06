import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import fire from '../config/Fire';
import LoginForm from '../components/LoginForm'
import Dashboard from './Dashboard';
import ListingjobForm from '../components/ListingjobForm';
import ListingjobFormEmployer from '../components/ListingjobFormEmployer';

class Jobowned extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listing: [],
        }

        this.database = fire.database().ref("ListingJob");
        this.renderList = this.renderList.bind(this);
    }


    componentWillMount() {
        this.database.on('value', snap => {
            var list2 = this.state.listing;
            for (var x in snap.val()) {
                list2.push(snap.val()[x]);

            }

            this.setState({
                listing: list2,
            })

        })
    }

    renderList(){
        console.log(this.state.listing);
        if (this.state.listing.length == 0){
            return (
                <div>
                    <h1>Dont have any job that you create</h1>
                    <h1>Please create some job</h1>
                </div>
            )
        }else{
            //still have bug because firebase fetch all job that have in database 
            //so second condition have all the job number in list
            //if want to fix have to query with email on database and fetch only job that same condition
            console.log('this is in else')
            console.log(this.state.listing.length)
            return(
                
                this.state.listing.map((notes) => {
                    if (fire.auth().currentUser.email == notes.Employee) {
                        return (
                            <div>
                                <ListingjobFormEmployer
                                    Jobname={notes.Jobname}
                                    Jobdes={notes.Jobdes}
                                    Wages={notes.Wages}
                                    Amount={notes.Amount}
                                    Currentnumber={notes.Currentnumber}
                                    Currentemployer={notes.Currentemployer}
                                    Date={notes.Date}
                                    Begintime={notes.Begintime}
                                    Endtime={notes.Endtime}
                                    Location={notes.Location}
                                    Employee={notes.Employee}
                                    Workkey={notes.Workkey}
                                    Status={notes.Status}
                                />
                                <br />
                            </div>
                        )
                    }

                }
            )
            )
        }}

    render() {

        return (
            <div style={{ marginLeft: '15%', marginTop: '5%' }}>
                <h1>My Job</h1>
                {this.renderList()}
            </div>

        );
    }
}



export default Jobowned;