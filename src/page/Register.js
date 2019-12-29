import React from 'react';
import RegisterForm from '../components/RegisterForm';
import '../style.css';

const Register = () => {
    return (
        <div>
            <h1 style={{marginLeft:'40%'}}>Register for ACTTIME</h1>
            <RegisterForm/>
        </div>
    );
};

export default Register;