import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api'; // Adjust the URL based on your backend configuration

export const emulateDevice = async (url, device) => {
    try {
        const response = await axios.post(`${BASE_URL}/emulate`, {
            url,
            width: device.width,
            height: device.height
        });
        return response.data;  // Assuming the response includes data like a screenshot or HTML content
    } catch (error) {
        console.error('Error during device emulation:', error);
        throw error;
    }
};
