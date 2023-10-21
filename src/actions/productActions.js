// actions/productActions.js
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
