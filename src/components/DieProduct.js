import React, { useEffect, useState } from 'react';
import './Designs/DieProduct.css';
import { db } from './firebaase';


const ProductCard = ({ name, image, price }) => (
  <div className='diecard-card'>
    <img src={image} alt={name} className='diecard-image' />
    <h3 className='diecard-name'>{name}</h3>
    <p className='diecard-price'>{price}</p>
    <button className='diecard-button'>Whats'App</button>
  </div>
);

const DieProduct = () => {
  const [data, setData] = useState([]);

  const fetchProduct = async () => {
    try {
      let productData = [];
      // Fetch products by category
      const snapshot = await db.collection('Die').get();
      productData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(productData);
    } catch (error) {
      console.error('Error fetching products: ', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className='diecard-container'>
      {data.map((product, index) => (
        <ProductCard
          key={index}
          name={product.title}
          image={product.url}
          price={product.price}
        />
      ))}
    </div>
  );
};



export default DieProduct;
