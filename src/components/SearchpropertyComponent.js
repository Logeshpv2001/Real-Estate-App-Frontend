import React, { useState } from 'react';
import axios from 'axios';

const SearchProperties = () => {
    const [searchParams, setSearchParams] = useState({
        location: '',
        priceMin: '',
        priceMax: '',
        type: '',
    });
    const [properties, setProperties] = useState([]);

    const { location, priceMin, priceMax, type } = searchParams;

    const onChange = e => setSearchParams({ ...searchParams, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.get('/api/properties/search', {
                params: searchParams
            });
            setProperties(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Search Properties</h1>
            <form onSubmit={onSubmit}>
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
                    <label>Min Price</label>
                    <input
                        type="number"
                        name="priceMin"
                        value={priceMin}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Max Price</label>
                    <input
                        type="number"
                        name="priceMax"
                        value={priceMax}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label>Type</label>
                    <input
                        type="text"
                        name="type"
                        value={type}
                        onChange={onChange}
                    />
                </div>
                <button type="submit">Search</button>
            </form>
            <ul>
                {properties.map(property => (
                    <li key={property._id}>
                        {property.type} in {property.location} - ${property.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchProperties;