import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081';

export const getFoodItemApi = async (foodItemCode) =>
    axios.get(`/foodItems?foodItemCode=${foodItemCode}`);

export const searchFoodItemsApi = async (searchCriteria) =>
    axios.post(`/foodItems/_search`, searchCriteria);
