import React, { useState } from 'react';
import EmulationButton from '../components/EmulationButton';

function HomePage() {
    const [url, setUrl] = useState('');
    const [validatedUrl, setValidatedUrl] = useState('');

    const handleUrlChange = (e) => setUrl(e.target.value);

    return (
        <div>
            <input type="text" value={url} onChange={handleUrlChange} placeholder="Enter URL" />
            <EmulationButton url={url} setValidatedUrl={setValidatedUrl} />
            {validatedUrl && (
                <iframe
                    src={validatedUrl}
                    width="800"
                    height="600"
                    style={{ border: '1px solid black', marginTop: '20px' }}
                    title="Emulated Page"
                ></iframe>
            )}
        </div>
    );
}

export default HomePage;
