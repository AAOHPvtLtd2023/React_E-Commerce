import React from "react";
import DemoCarousel from "./slider";
import Smalladv from "./advertisment";
import Bestproduct from "./BestProduct.js";
import CategorySlide from "./CategorySlide.jsx";
import ProductSlider from "./ProductSlider.jsx";
import ProductCard from "./ProductSlider.jsx";
import "../components/Designs/main.css";
import CommentBox from "./CommentBox.jsx";

const Home = () => {
  const products = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    name: `Product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
    description: 'This is a long description of the product. It can go on and on to test the scroll functionality. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo ut eros vehicula luctus.'
  }));

  return (
    <>
    <div style={{display:'flex'}}>
      <CategorySlide/>
      <DemoCarousel />
    </div>
      <Smalladv />
      <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    <div>
      <h2>Comment Section</h2>
      <CommentBox/>
    </div>
      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration:'underline', fontSize:'2em',fontStyle:'oblique', fontWeight:'600' }}>Our Company</h2>
      <div style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>
        <p style={{ display: 'flex', fontSize: '1.6em', textAlign:'justify', padding:'20px'}}> Owing to the superior quality of the product range offered, we have carved a firm foothold in the domain. The products offered
          by us are in compliance with industrial standards and are offered at most affordable prices. The professionals appointed by us
          invest their long working hours in manufacturing products as per clients' specifications and details to meet their exact
          requirements.
          We direct all our activities to cater the expectations of customers by providing them excellent quality products as per their
          gratifications. Moreover, we follow moral business policies and crystal pure transparency in all our transactions to keep healthy
          relations with the customers.</p>
      </div>
      <Bestproduct />
    </>
  );
};

export default Home;
