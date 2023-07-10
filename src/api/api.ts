import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_KEY,
});

export const fetchData = async () => {
    try {
        const response = await apiClient.get("");
    //    console.log(response.data.products)
        return response.data.products;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};