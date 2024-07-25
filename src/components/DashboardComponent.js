import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const { auth } = useContext(AuthContext);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await axios.get('/api/properties', {
                    headers: {
                        'Authorization': `Bearer ${auth.token}`
                    }
                });
                setProperties(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProperties();
    }, [auth.token]);

    return (
        <div>
            <h1>Dashboard</h1>
            <Link to="/properties/new">Create Property</Link>
            <ul>
                {properties.map(property => (
                    <li key={property._id}>
                        <Link to={`/properties/edit/${property._id}`}>
                            {property.type} in {property.location}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;