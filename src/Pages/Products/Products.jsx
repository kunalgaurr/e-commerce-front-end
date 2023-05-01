import React, { useState } from 'react';
import { Topbar } from '../../Components/Topbar/Topbar';
import { products } from '../../utils/products';
import './Products.css';
import { Product } from '../../Components/Product/Product';

export const Products = () => {
  const [range, setRange] = useState(300000);

  const handleChange = (e) => {
    setRange(e.target.value);
  };
  return (
    <div id="products-container">
      <Topbar />
      <div id="products-wrapper">
        <div id="product-left">
          <div id="product-left-wrapper">
            <div id="products-category">
              <span className="product-filter-title">Sort by Categories</span>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="product-category-input"
                />
                <p className="produt-categoryName">Grocery</p>
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="product-category-input"
                />
                <p className="produt-categoryName">Electronics</p>
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="product-category-input"
                />
                <p className="produt-categoryName">Fashion</p>
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="product-category-input"
                />
                <p className="produt-categoryName">Home Appliances</p>
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="product-category-input"
                />
                <p className="produt-categoryName">Sports and Toys</p>
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="product-category-input"
                />
                <p className="produt-categoryName">Furniture</p>
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="product-category-input"
                />
                <p className="produt-categoryName">Home Decor</p>
              </label>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="product-category-input"
                />
                <p className="produt-categoryName">Bags and Luggages</p>
              </label>
            </div>
            <div id="product-price">
              <label htmlFor="">
                <div id="product-price-header">
                  <p className="product-filter-title">Sort by Price</p>
                  <input
                    type="number"
                    name=""
                    id="range-input"
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                  />
                </div>
                <input
                  type="range"
                  name=""
                  id=""
                  value={range}
                  step={1}
                  min={0}
                  max={300000}
                  onChange={handleChange}
                />
                <div id="price-range">
                  <span id="price-range-1">Rs. 0</span>
                  <span id="price-range-2">Rs. {range}</span>
                </div>
              </label>
            </div>
            <div id="product-availability">
              <p className="product-filter-title">Sort by availability</p>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <p className="availability-text">In stock</p>
              </label>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <p className="availability-text">Out of stock</p>
              </label>
            </div>
          </div>
        </div>
        <div id="product-right">
          <span id="product-heading">Our wide range of products.</span>
          <div id="products-list">
            {products.map((e) => (
              <Product key={e._id} product={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
