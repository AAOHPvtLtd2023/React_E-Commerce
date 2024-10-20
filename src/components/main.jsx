import React, { useState, useEffect } from "react";
import { db } from "./firebaase.js";
import DemoCarousel from "./slider";
import Smalladv from "./advertisment";
import Bestproduct from "./BestProduct.js";
import CategorySlide from "./CategorySlide.jsx";
import ProductSlider from "./ProductSlider.jsx";
import ProductCard from "./ProductSlider.jsx";
import "../components/Designs/main.css";
import CommentBox from "./CommentBox.jsx";
import Subtabbar from "./subTabBar.js";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      let productData = [];

      // Fetch all products
      const snapshot = await db.collectionGroup('products').get();
      productData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(productData);
      setData(productData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products: ', error);
    }
  };



  useEffect(() => {
    fetchProduct();
  }, []);

  return (
   <div className="main-wrapper">
  <Subtabbar/>
    <div className="main-wrapper-inner">


<div style={{ display: 'flex' }}>
 <CategorySlide />
 <DemoCarousel />
</div>
<Smalladv />
<div className="product-list">
 {data.map(product => (
   <ProductCard key={product.id} product={product} />
 ))}
</div>
<div>
 <h2>Comment Section</h2>
 <CommentBox />
</div>
<Bestproduct />
    </div>


   </div>
  );
};

export default Home;
