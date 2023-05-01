import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HiMagnifyingGlass,
  HiOutlineHeart,
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiChevronDown,
  HiOutlineSquares2X2,
  HiXMark,
} from 'react-icons/hi2';
import './Topbar.css';

export const Topbar = () => {
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <div id="topbar-container">
      <div id="topbar-wrapper">
        <div id="topbar-logo">
          <span id="logo" onClick={() => navigate('/')}>
            Urban Buy
          </span>
        </div>
        <div id="topbar-options">
          <span
            id="topbar-categories"
            onClick={() => setCategoryToggle(!categoryToggle)}
          >
            Categories <HiChevronDown />
            <div
              id="topbar-category-list"
              style={{
                transform: categoryToggle
                  ? 'translateY(108%)'
                  : 'translateY(0%)',
                opacity: categoryToggle ? 1 : 0,
              }}
            >
              <span className="topbar-caregory-item">Grocery</span>
              <span className="topbar-caregory-item">Fashion</span>
              <span className="topbar-caregory-item">Electronics</span>
              <span className="topbar-caregory-item">Furniture</span>
              <span className="topbar-caregory-item">Sports and Toys</span>
              <span className="topbar-caregory-item">Home Appliances</span>
            </div>
          </span>
          <Link to="/products" className="topbar-link">
            Products
          </Link>
          <Link to="/about" className="topbar-link">
            About us
          </Link>
          <Link to="/orders" className="topbar-link">
            Orders
          </Link>
        </div>
        <div id="topbar-search">
          <div id="topbar-search-option">
            <HiMagnifyingGlass />
            <input type="text" id="topbar-search-input" placeholder="Search" />
          </div>
        </div>
        <div id="topbar-user-options">
          <HiOutlineHeart />
          <HiOutlineUser />
          <HiOutlineShoppingBag />
        </div>
        <div id="topbar-button" onClick={() => setMenuToggle(true)}>
          <HiOutlineSquares2X2 />
        </div>
        <div
          id="topbar-menu"
          style={{
            transform: menuToggle ? 'translateY(0%)' : 'translateY(-100%)',
          }}
        >
          <HiXMark onClick={() => setMenuToggle(false)} id="close-button" />
          <Link className="menu-link" to="/">
            Home
          </Link>
          <Link className="menu-link" to="/">
            Orders
          </Link>
          <Link className="menu-link" to="/">
            About us
          </Link>
          <div id="topbar-profile-options">
            <HiOutlineHeart />
            <HiOutlineUser />
            <HiOutlineShoppingBag />
          </div>
        </div>
      </div>
    </div>
  );
};
