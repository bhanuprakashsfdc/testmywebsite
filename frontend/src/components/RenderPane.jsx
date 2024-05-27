import React from 'react';
import useStore from '../store/store'; // Assuming Zustand is used for state management
import './components.css';

function RenderPane() {
    const { url, device } = useStore(); // Access the URL and device from the global state

    if (!url) {
        return <p>Please enter a URL to begin emulation.</p>; // Prompt for URL if not provided
    }

    // Adjust the iframe to match the device's dimensions
    const style = {
        width: device.width + 'px',
        height: device.height + 'px'
    };

    return (
        <div className="render-pane" style={{ overflow: 'auto' }}>
            <iframe src={url} style={style} title="Emulated Device Display"></iframe>
        </div>
    );
}

export default RenderPane;
