import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Topbar } from '../../Components/Topbar/Topbar';
import { products } from '../../utils/products';
import './ProductPage.css'

export const ProductPage = () => {
  const params = useParams();
  console.log(params);

  const [images, setImages] = useState('/assets/products/iphone14/1.png');

  const product = products[0];
  return (
    <div id="product-page-container">
      <Topbar />
      <div id="product-page-wrapper">
        <div id="product-page-left">
          <img src={images} alt="" id="product-page-img-1" />
          <div id="product-page-images">
            {product.images.map((e) => (
              <img
                src={e}
                alt=""
                className="product-page-images"
                onClick={() => setImages(e)}
              />
            ))}
          </div>
        </div>
        <div id="product-page-right"></div>
      </div>
    </div>
  );
};
