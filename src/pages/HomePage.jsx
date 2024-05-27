// In your HomePage.jsx or similar file
import React from 'react';
import URLInput from '../components/URLInput';
import DeviceSelector from '../components/DeviceSelector';
import CountrySelector from '../components/CountrySelector';
import RenderPane from '../components/RenderPane';

function HomePage() {
    const handleURLSubmit = (url) => {
        console.log("URL Submitted: ", url);
        // Further processing can be added here
    };

    return (
        <div>
            <URLInput onSubmit={handleURLSubmit} />
            <DeviceSelector />
            <h1>Choose Your Country</h1>
            <CountrySelector />
            <RenderPane />
        </div>
    );
}

export default HomePage;
