import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import fire from '../config/Fire';
import '../style.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));
class ProfileBar extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        })
    }

    onLogout() {
        fire.auth().signOut();
    }
    
    render() {
        return (
            <div>
                {this.state.user ? (<div>
                    <Button variant='contained' id='RegLogOut' color='primary'
                        onClick={this.onLogout} >Logout</Button>
                </div>) : (
                    <div display='inline' id='AllButtonProfile'>
                        <Button href='/Register' variant='outlined' color='inherit' id='RegLogOut'>Register</Button>
                        <Button display='inline' href='/login' variant='outlined' color='inherit' id='LoginButton' style={{marginLeft:'10px'}}>Login</Button>
                    </div>
                )}
            </div>
        )


    }
}



export default ProfileBar;