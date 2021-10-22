import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'; 

const Login = () => {

    const { userLogin, signInUsingGoogle} = useAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // handle email
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleLogin=(e)=>{
        e.preventDefault();
        userLogin(email , password)
    }
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                <h2>Login Page</h2>
                    <form onSubmit={handleLogin}>
                        <div className="my-3">
                            <input onChange={handleEmail} type="text" className="form-control" placeholder="E-mail" />
                        </div>
                        <div className="my-3">
                            <input onChange={handlePassword} type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="my-3">
                            <input type="submit" className="btn btn-info" value="Login" />
                        </div>
                    </form>
                    <p> <Link to="/register">Need New Account? Register..</Link></p>
                    <p className="text-center mt-4">--Sign In With--</p>
                    <div className="text-center">
                        <button onClick={signInUsingGoogle} className="btn btn-outline-dark">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;