import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

export const Category = ({ category }) => {
  return (
    <Link id="category-container" to={category.link}>
      <div id="category-wrapper">
        <img src={category.img} alt="" id="category-img" />
      </div>
      <div id="category-name">{category.name}</div>
    </Link>
  );
};
