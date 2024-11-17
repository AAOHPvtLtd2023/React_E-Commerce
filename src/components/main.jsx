import React, { useState, useEffect } from "react";
import { db } from "./firebaase.js";
import DemoCarousel from "./slider";
import Smalladv from "./advertisment";
import CategorySlide from "./CategorySlide.jsx";
import ProductCard from "./ProductSlider.jsx";
import "../components/Designs/main.css";
import CommentBox from "./CommentBox.jsx";
import Subtabbar from "./subTabBar.js";
import ProductGallery from "./ProductGallery.js";
import CertificateList from "./Designs/CerificateList.js";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      let productData = [];

      // Fetch all products
      const snapshot = await db.collectionGroup("products").get();
      productData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(productData);
      setData(productData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const snapshot = await db.collection("categories").get();
      const categoryData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(categoryData);
      setCategories(categoryData);

      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCategories();
  }, []);

  return (
    <div className="main-wrapper">
      <Subtabbar />
      <div className="main-wrapper-inner">
        <div style={{ display: "flex" }}>
          {categories && <CategorySlide categories={categories} />}
          <DemoCarousel />
        </div>
        <Smalladv />
        <div className="featured-product-main">Featured Products</div>
        <div className="product-list">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="photo-gallery-main">We Are Recognized And Certified</div>
        <CertificateList />
        <div className="photo-gallery-main">Photo Gallery</div>
        <ProductGallery />
        <div className="comment-area-main">
          <strong>Comment Section</strong>
          <CommentBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
