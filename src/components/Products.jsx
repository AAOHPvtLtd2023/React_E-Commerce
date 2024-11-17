import React, { useState, useEffect } from "react";
import { db } from "./firebaase.js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Designs/Products.css";
import { FaAngleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Box, Modal, Rating } from "@mui/material";
import { IoIosArrowUp } from "react-icons/io";
import DieProduct from "./DieProduct.js";


const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const { catID } = useParams();
  const [open, setOpen] = useState(false);

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


  useEffect(() => {
    if (catID) {
      fetchProduct(catID);
    }
    fetchCategories();
    fetchInitialProducts();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '5%' }}>
          <div className="categories-subtab">
            <div className="categories-subtab-tab">
              <FaAngleRight className="right-arrow" />
              <span onClick={() => fetchProduct("all")}>
                ALL
              </span>
            </div>
            {categories.map((cat) => (
              <div className="categories-subtab-tab">
                <FaAngleRight className="right-arrow" />
                <span onClick={() => fetchProduct(cat.id)}>
                  {cat.name}
                </span>
              </div>
            ))}
          </div>

          <div className="all-card-wrap">
            {data.map((product) => {
              return (
                <div className="product-cards">
                  <img className="product-cards-img" src={product.photos[0]} />
                  <div className="product-cards-content">
                    <span className="cards-content-title">{product.title}</span>
                    <div className="cards-content-price">
                      {
                        product.rating &&
                        <Rating name="read-only" value={product.rating} readOnly color="#ff6a00" />
                      }
                      ({product.reviews} reviews)
                    </div>
                  </div>
                  <a href={`/product/${product.category}/${product.id}`}>
                    <div className="product-cards-buynow">
                      VIEW MORE
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          <div className="responsive-categories-subtab">
            <div className="responsive-categories-subtab-button" onClick={handleOpen}>
              <span>
                <IoIosArrowUp size={30} />
              </span>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"

            >
              <Box sx={{
                width: '80%',
                height: '90%',
                maxWidth: '90%',
                maxHeight: '90%',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
                mx: 'auto',
                my: '20%', // Centers the Box vertically with some margin
              }}>
                <div className="categories-subtab-responsive">
                  <div className="categories-subtab-tab">
                    <FaAngleRight className="right-arrow" />
                    <span onClick={() => {
                      fetchProduct("all")
                      setOpen(false)
                    }}>
                      ALL
                    </span>
                  </div>
                  {categories.map((cat) => (
                    <div className="categories-subtab-tab">
                      <FaAngleRight className="right-arrow" />
                      <span onClick={() => {
                        fetchProduct(cat.id)
                        setOpen(false);
                      }}>
                        {cat.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Box>
            </Modal>
          </div>

        </div>



        <div className="diearea">

          <h3 style={{ color: '#B2130D' }}>Spare Accessories</h3>
          <DieProduct />
        </div>

      </>
    );
  };
  return (
    <>
      <div className="container-Products my-3 py-3" >
        <div className="row" >
          <div className="col-12">
            <h2 className="display-5 text-center"> Our Products</h2>
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
