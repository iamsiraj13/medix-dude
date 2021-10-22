import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const {createUser,error,setError} = useAuth()
    const [email , setEmail ] = useState("");
    const [password , setPassword ] = useState("");

    // handle email
    const handleEmail=(e)=>{
        setEmail(e.target.value);
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    const handleRegister=(e)=>{
        e.preventDefault();
        createUser(email,password) 
    }

    return (
        <div className="container py-5 col-sm-6">
            <p className="text-center text-success">{error}</p>
            <h2 className="mb-4">Register Page</h2>
            <form onSubmit={handleRegister}>
                <div className="my3">
                    <input onChange={handleEmail} type="text" className="form-control" placeholder="E-mail" required />
                </div>
                <div onChange={handlePassword} className="my-3">
                    <input type="password" className="form-control" placeholder="Password" required/>
                </div>
                <div className="my-3">
                    <input type="submit" className="btn btn-outline-dark" value="Register"/>
                </div>
            </form>
            <p>Already Have an Accoutn <Link to="/login">Sign In</Link> </p>
        </div>
    );
};

export default Register;