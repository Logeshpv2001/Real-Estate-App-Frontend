import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const EditProperty = ({ match, history }) => {
    const [formData, setFormData] = useState({
        type: '',
        location: '',
        price: '',
        description: '',
    });

    const { type, location, price, description } = formData;

    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await axios.get(`/api/properties/${match.params.id}`, {
                    headers: {
                        'Authorization':` Bearer ${auth.token}`
                    }
                });
                setFormData({
                    type: res.data.type,
                    location: res.data.location,
                    price: res.data.price,
                    description: res.data.description,
                });
            } catch (err) {
                console.error(err);
            }
        };
        fetchProperty();
    }, [auth.token, match.params.id]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.put(`/api/properties/${match.params.id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${auth.token}`
                }
            });
            history.push('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Edit Property</h1>
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
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditProperty;