import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://dummyjson.com/products',
});

export const fetchData = async () => {
    try {
        const response = await apiClient.get('https://dummyjson.com/products');
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};