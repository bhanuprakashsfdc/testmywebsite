import React, { useState } from 'react';
import './components.css';

function URLInput({ onSubmit }) {
    const [url, setUrl] = useState('');

    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(url);
    };

    return (
        <form onSubmit={handleSubmit} className="url-input">
            <input
                type="text"
                value={url}
                onChange={handleChange}
                placeholder="Enter URL to emulate..."
                className="input-field"
            />
            <button type="submit" className="submit-btn">Emulate</button>
        </form>
    );
}

export default URLInput;
