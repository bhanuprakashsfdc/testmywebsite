import React, { useState } from 'react';
import { validateUrl } from '../services/apiServices';

function EmulationButton({ url, setValidatedUrl }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleEmulateClick = async () => {
        setLoading(true);
        setError(null);
        try {
            const { validUrl } = await validateUrl(url);
            setValidatedUrl(validUrl);
            setLoading(false);
        } catch (error) {
            console.error('Emulation failed:', error);
            setError('Emulation failed. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={handleEmulateClick} disabled={loading}>
                {loading ? 'Loading...' : 'Emulate'}
            </button>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default EmulationButton;
