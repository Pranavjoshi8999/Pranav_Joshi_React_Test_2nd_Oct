// // components/MyCartPage.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../actions/cartActions';

// const MyCartPage = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.cart);

//   const handleRemoveFromCart = (product) => {
//     dispatch(removeFromCart(product));
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

//   return (
//     <div>
//       <h1>My Cart Page</h1>
//       <div className="cart-items">
//         {cartItems.map(item => (
//           <div key={item.id} className="cart-item">
//             <img src={item.image} alt={item.title} />
//             <h3>{item.title}</h3>
//             <p>${item.price}</p>
//             <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
//           </div>
//         ))}
//       </div>
//       <div className="sidebar">
//         <h2>Checkout List</h2>
//         <ul>
//           {cartItems.map(item => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//         <p>Total Price: ${totalPrice.toFixed(2)}</p>
//         <button>Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default MyCartPage;


// components/MyCartPage.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

const MyCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const checkout = () => {
    // You can implement a checkout process (e.g., send data to a server)
    // Here, we'll just clear the cart for simplicity
    // dispatch(clearCart());
    setCheckoutSuccess(true);
  };
  console.log(cart);
  const total = cart?.cart?.reduce((acc, item) => acc + item.price, 0);

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  return (
    <div>
      <h1>My Cart Page</h1>
      <div className="cart-items">
        {/* Display cart items and remove button here */}
      </div>
      <div className="sidebar">
        <h2>Checkout List</h2>
        <ul>
          {cart?.cart?.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <p>Total Price: ${total.toFixed(2)}</p>
        {/* <button onClick={checkout}>Checkout</button> */}
      </div>
      {checkoutSuccess && <p>Items have been checked out.</p>}
    </div>
  );
};


export default MyCartPage;