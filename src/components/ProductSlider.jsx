// ProductCard.js
import React from 'react';
import '../components/Designs/ProductSlider.css';
import { CiStar } from "react-icons/ci";
import { Rating } from '@mui/material';

const ProductCard = ({ product }) => {



  return (
    <div className="product-card">
      <img src={product.photos[0]} alt={product.title} height={200} width={300} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{product.title.slice(0, 29)}...</h2>
        {/* <p className="product-price">${product.price}</p> */}
        <div>
          {
            product.rating &&
            <Rating name="read-only" value={product.rating} readOnly color="#ff6a00" />
          }
        </div>
        <div className='buy-now-button'>
          <a href={"/product/" + product.category + "/" + product.id} className='buy-now-button-link'>View Product</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



