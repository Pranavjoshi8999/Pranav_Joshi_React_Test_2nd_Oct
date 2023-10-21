// // components/ProductCard.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../actions/cartActions';

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.title} />
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductCard;


// components/ProductCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleAddToCart = () => {
    // Check if the item is already in the cart
    console.log(cart);
    const isAlreadyInCart = cart?.cart?.some(item => item.id === product.id);

    if (!isAlreadyInCart) {
      dispatch(addToCart(product));
    } else {
      // Handle duplicate item in the cart (e.g., show a message)
    }
  };

  return (
    <div className="product-card">
      {/* Product details here */}
      {/* {console.log(product)} */}
      <img src={product.thumbnail} alt={product.title} />
       <h3>{product.title}</h3>
       <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;