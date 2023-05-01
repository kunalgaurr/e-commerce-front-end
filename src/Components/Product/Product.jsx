import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { BsCartPlus } from 'react-icons/bs';

export const Product = ({ product }) => {
  const name = product.name;
  const result = [name.slice(0, 13), name.slice(13)];
  return (
    <Link id="product-container" to={`/products/${product._id}`}>
      <div id="product-img-container">
        <img src={product.images[0]} alt="" id="product-img" />
      </div>
      <div id="product-details">
        <div>
          <span id="product-name">
            {product.name.length > 13 ? result[0] + '...' : name}
          </span>
          <span id="product-price">Rs. {product.price}</span>
        </div>
        <span id="add-to-cart-button">
          <BsCartPlus />
        </span>
      </div>
    </Link>
  );
};
