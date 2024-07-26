import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const CreateProperty = () => {
    const [formData, setFormData] = useState({
        type: '',
        location: '',
        price: '',
        description: '',
    });

    const { type, location, price, description } = formData;

    const { auth } = useContext(AuthContext);
    // const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log(auth);
        try {
            await axios.post('/api/properties', formData,
                 {
                headers: {
                    'Authorization': `Bearer ${auth.token}`
                }
                
            }
        );
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Create Property</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Type</label>
                    <input
                        type="text"
                        name="type"
                        value={type}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        name="description"
                        value={description}
                        onChange={onChange}
                    ></textarea>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateProperty;