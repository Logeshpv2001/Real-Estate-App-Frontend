import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Real Estate Management Platform</h1>
            <Link to="/register">Register</Link>
            <br />
            <Link to="/login">Login</Link>
           
        </div>
    );
};

export default Home;