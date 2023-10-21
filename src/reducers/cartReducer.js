// reducers/cartReducer.js
const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Add product to the cart
        return { ...state, cart: [...state.cart, action.payload] };
      case 'REMOVE_FROM_CART':
        // Remove product from the cart
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  