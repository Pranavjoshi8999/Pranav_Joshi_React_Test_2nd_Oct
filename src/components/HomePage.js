// components/HomePage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import ProductCard from './ProductCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="product-list">
       
        {console.log(products)}
        {products?.products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
