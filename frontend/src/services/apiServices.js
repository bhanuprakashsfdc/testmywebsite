import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

export const validateUrl = async (url) => {
    try {
        const response = await axios.post(`${BASE_URL}/validate-url`, { url });
        return response.data;
    } catch (error) {
        console.error('Error during URL validation:', error);
        throw error;
    }
};
