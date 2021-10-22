import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {logOut, user} = useAuth();
    return (
        <header className="bg-info py-3">
             <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4 logo">
                        <Link to='/'><h2>Medix-Dude</h2></Link>
                    </div>
                    <div className="col-md-8">
                        <nav>
                            <ul className="d-flex justify-content-end">
                              <li> <Link to="/home">Home</Link> </li>
                              <li> <Link to="/about">About</Link> </li>
                              <li> <Link to="/booking">Booking</Link> </li>
                              <li> <Link to="/surgery">Surgery</Link> </li>
                            {
                                user.email?(
                                    <li> <span>{user.name}</span> <button onClick={logOut} className="btn btn-outline-dark">Log Out</button> </li>)
: 
                                    (<li> <Link to="/login">Login</Link> </li>)
                                
                            }
 
                            </ul>
                        </nav>
                    </div>
                </div>
            </div> 
        </header>
    );
};

export default Header;