import React, { useState } from 'react';
import { emulateDevice } from '../services/apiServices';

function EmulationButton({ url, device }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleEmulateClick = async () => {
        setLoading(true);
        setError(null);
        try {
            const emulationResult = await emulateDevice(url, device);
            console.log(emulationResult); // Update state to display the result, or handle it as needed
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
