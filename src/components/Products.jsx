import React, { useState, useEffect } from "react";
import { db } from "./firebaase.js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Designs/Products.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);




  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const snapshot = await db.collection('categories').get();
        const categoryData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoryData);


        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchCategories();
  }, []);

  const fetchProduct = async (cat) => {
    setLoading(true);
    try {
      let productData = [];

      if (cat === "all") {
        // Fetch all products
        const snapshot = await db.collectionGroup('products').get();
        productData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } else {
        // Fetch products by category
        const snapshot = await db.collection('categories').doc(cat).collection('products').get();
        productData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      }

      setData(productData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products: ', error);
    }
  };



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await db.collection('categories').get();
        const categoryData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategories(categoryData);

        // Fetch and store products for each category
        const productsData = {};
        await Promise.all(
          categoryData.map(async (category) => {
            const productRef = db.collection('categories').doc(category.id).collection('products');
            const productSnapshot = await productRef.get();
            const productData = productSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            productsData[category.id] = productData;
          })
        );
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    const fetchInitialProducts = async () => {
      fetchProduct("all");
    };

    fetchCategories();
    fetchInitialProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };


  const ShowProducts = () => {
    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* <div className="buttons text-center py-5">
            <button className="btn btn-outline-dark btn-sm m-2" onClick={() => fetchProduct("all")}>
              All
            </button>
            {categories.map((cat) => (
              <button key={cat} className="btn btn-outline-dark btn-sm m-2" onClick={() => fetchProduct(cat.id)}>{cat.name}</button>
            ))}
          </div> */}
          <div className="categories-subtab">
            <div className="categories-subtab-tab">
              <span>
                Cat1
              </span>
            </div>
            <div className="categories-subtab-tab">
              <span>
                Cat1
              </span>
            </div>
            <div className="categories-subtab-tab">
              <span>
                Cat1
              </span>
            </div>
            <div className="categories-subtab-tab">
              <span>
                Cat1
              </span>
            </div>
          </div>

          <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap', alignItems:'center', justifyContent:'center', gap:'50px'}}>
            {data.map((product) => {
              return (
                <div className="product-cards">
                  <img className="product-cards-img" src="https://templates.envytheme.com/ehay/default/assets/images/products/product-5.jpg"/>
                  <div className="product-cards-content">
                    <span className="cards-content-title">{product.title}</span>
                    <div className="cards-content-price">
                      
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ff6a00" stroke="#ff6a00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.495 18.587l4.092 2.15a1.044 1.044 0 0 0 1.514-1.106l-.783-4.552a1.045 1.045 0 0 1 .303-.929l3.31-3.226a1.043 1.043 0 0 0-.575-1.785l-4.572-.657A1.044 1.044 0 0 1 15 7.907l-2.088-4.175a1.044 1.044 0 0 0-1.88 0L8.947 7.907a1.044 1.044 0 0 1-.783.575l-4.51.657a1.044 1.044 0 0 0-.584 1.785l3.309 3.226a1.044 1.044 0 0 1 .303.93l-.783 4.55a1.044 1.044 0 0 0 1.513 1.107l4.093-2.15a1.043 1.043 0 0 1 .991 0"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ff6a00" stroke="#ff6a00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.495 18.587l4.092 2.15a1.044 1.044 0 0 0 1.514-1.106l-.783-4.552a1.045 1.045 0 0 1 .303-.929l3.31-3.226a1.043 1.043 0 0 0-.575-1.785l-4.572-.657A1.044 1.044 0 0 1 15 7.907l-2.088-4.175a1.044 1.044 0 0 0-1.88 0L8.947 7.907a1.044 1.044 0 0 1-.783.575l-4.51.657a1.044 1.044 0 0 0-.584 1.785l3.309 3.226a1.044 1.044 0 0 1 .303.93l-.783 4.55a1.044 1.044 0 0 0 1.513 1.107l4.093-2.15a1.043 1.043 0 0 1 .991 0"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ff6a00" stroke="#ff6a00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.495 18.587l4.092 2.15a1.044 1.044 0 0 0 1.514-1.106l-.783-4.552a1.045 1.045 0 0 1 .303-.929l3.31-3.226a1.043 1.043 0 0 0-.575-1.785l-4.572-.657A1.044 1.044 0 0 1 15 7.907l-2.088-4.175a1.044 1.044 0 0 0-1.88 0L8.947 7.907a1.044 1.044 0 0 1-.783.575l-4.51.657a1.044 1.044 0 0 0-.584 1.785l3.309 3.226a1.044 1.044 0 0 1 .303.93l-.783 4.55a1.044 1.044 0 0 0 1.513 1.107l4.093-2.15a1.043 1.043 0 0 1 .991 0"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ff6a00" stroke="#ff6a00" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.495 18.587l4.092 2.15a1.044 1.044 0 0 0 1.514-1.106l-.783-4.552a1.045 1.045 0 0 1 .303-.929l3.31-3.226a1.043 1.043 0 0 0-.575-1.785l-4.572-.657A1.044 1.044 0 0 1 15 7.907l-2.088-4.175a1.044 1.044 0 0 0-1.88 0L8.947 7.907a1.044 1.044 0 0 1-.783.575l-4.51.657a1.044 1.044 0 0 0-.584 1.785l3.309 3.226a1.044 1.044 0 0 1 .303.93l-.783 4.55a1.044 1.044 0 0 0 1.513 1.107l4.093-2.15a1.043 1.043 0 0 1 .991 0"/></svg>
                    </div>
                  </div>
                  <div className="product-cards-buynow">
                    VIEW MORE
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3" >
        <div className="row" >
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className=" justify-content-center" >
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
