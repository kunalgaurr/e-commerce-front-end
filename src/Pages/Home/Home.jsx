import React from 'react';
import { Topbar } from '../../Components/Topbar/Topbar';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../utils/categories';
import { Category } from '../../Components/Category/Category';
import { products } from '../../utils/products';
import { Product } from '../../Components/Product/Product';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="home-container">
      <Topbar />
      <div id="home-wrapper">
        <div id="home-add">
          <div id="home-add-wrapper">
            <span id="home-add-header">Welcome to Urban buy</span>
            <span id="home-add-text">
              Your one stop shopping store <br /> for affordable shopping
            </span>
            <span id="home-add-button" onClick={() => navigate('/products')}>
              Buy now
            </span>
            <img src="/assets/home-ad.png" alt="" id="home-add-img" />
          </div>
        </div>
        <div id="home-categories">
          {categories.map((e) => (
            <Category key={e.link} category={e} />
          ))}
        </div>
        <div id="home-products">
          <span id="home-product-header">
            Start shopping with our wide range of products.
          </span>
          <div id="home-products-container">
            {products.map((e) => (
              <Product key={e._id} product={e} />
            ))}
          </div>
        </div>
        <div id="home-top-picks">
          <span id="home-top-picks-header">Some of the latest top picks</span>
          <div id="home-top-picks-container">
            {products.map((e) => (
              <Product key={e._id} product={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
