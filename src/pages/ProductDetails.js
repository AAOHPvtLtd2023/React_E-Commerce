import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import ProductCard from "../components/ProductSlider";
import ProductCarousel from "../components/ProductCarsoual";
import { Rating } from "@mui/material";
import { db } from "../components/firebaase.js";
import { Link, useParams } from "react-router-dom";
import sanitizeHtml from 'sanitize-html';

const Productdetails = () => {
    const [ratings, setRatings] = useState(null);
    const [reviews, setReviews] = useState(null);
    const { catId, productId } = useParams();
    const [product, setProduct] = useState([]);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [description, setDescription] = useState('');

    useEffect(() => {
        const generateRandomStar = () => {
            const min = 3;
            const max = 5;
            const random = Math.random() * (max - min) + min;
            setRatings(random.toFixed(3)); // limiting to 3 decimal places
        };
        const generateRandomReview = () => {
            const random = Math.floor(Math.random() * (500 - 100 + 1)) + 400; // Only 4 or 5
            setReviews(random); // limiting to 3 decimal places
        };

        const fetchProduct = async () => {
            setLoading(true);
            try {
                const snapshot = await db
                    .collection('categories')
                    .doc(catId)
                    .collection('products')
                    .doc(productId)
                    .get();

                const productData = snapshot.data();
                setProduct(productData);
                console.log(productData);
                const sanitizedDescription = sanitizeHtml(productData.description);
                setDescription(sanitizedDescription);
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false); // Set loading to false after fetching data
            }
        };

        fetchProduct();
        generateRandomStar();
        generateRandomReview();


    }, [catId, productId])

    return (
        <div className="details-main">
            <div className="details-main-wrap">
                <div className="details-main-wrap-image">
                    {product.photos && product.photos.length > 0 ? (
                        <ProductCarousel productImages={product.photos} />
                    ) : (
                        <p>No media available</p>
                    )}
                </div>
                {product &&
                    <div className="details-main-wrap-smalldetils">
                        <span className="details-main-title">{product.title}</span>
                        <div className="details-main-reviews">
                            <Rating name="read-only" value={ratings} readOnly color="#ff6a00" />
                            <span className="main-reviews-content">{reviews} reviews</span>
                        </div>
                        <div className="details-main-price">
                            <span className="main-price-offerprice">₹{product.price}</span>
                            <span className="main-price-baseprice">₹{product.price + 20000}</span>
                            <span className="main-price-discount">(22% 0ff)</span>
                        </div>
                        <div className="details-main-detailsword">
                            <p className="main-detailsword-content" dangerouslySetInnerHTML={{ __html: product.description }}>
                            </p>

                        </div>
                        <div className="details-main-bajarangi">
                            <div className="details-main-content">
                                <span className="main-content-brand">
                                    Brand:
                                </span>
                                <span className="main-content-industry">
                                    Bajarangi Industries
                                </span>
                            </div>
                            <div className="details-main-content">
                                <span className="main-content-brand">
                                    Type:
                                </span>
                                <span className="main-content-industry">
                                    Paper plate making
                                </span>
                            </div>
                            <div className="details-main-content">
                                <span className="main-content-brand">
                                    Control System:
                                </span>
                                <span className="main-content-industry">
                                    PLC Control
                                </span>
                            </div>
                            <div className="details-main-content">
                                <span className="main-content-brand">
                                    Power:
                                </span>
                                <span className="main-content-industry">
                                    3HP
                                </span>
                            </div>
                            <div className="details-main-content">
                                <span className="main-content-brand">
                                    Machine material:
                                </span>
                                <span className="main-content-industry">
                                    Mild steel
                                </span>
                            </div>
                        </div>
                        <div className="details-main-buttons">

                            <div className="details-main-quotes">
                                <span className="main-quotes-content">
                                    Get Quotes
                                </span>
                            </div>
                            <div className="details-main-quotes">
                                <a href="tel:977062436">
                                    <span className="main-quotes-content">
                                        Call Now
                                    </span>
                                </a>
                            </div>
                        </div>


                    </div>
                }
            </div>

            <div className="details-main-wrap-details">

                <div className="details-main-descriptionescription">
                    <h3 className="main-description-heading">Product Description</h3>
                    <div className="main-description-product">
                        <p className="description-product-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam bibendum gravida nunc. Aliquam ut ante quis magna posuere vehicula sed a ipsum. Donec purus massa, sagittis eget condimentum nec, sagittis varius erat. Vivamus sodales turpis et posuere auctor. Nam non eros quis nulla cursus consequat. Integer facilisis, ante ac varius dictum, lectus sapien tincidunt magna, non gravida orci nisi et mi. Fusce a dolor feugiat, pretium nibh non, iaculis ipsum. Phasellus id tincidunt quam. Integer erat eros, tincidunt at consequat porta, maximus ac ex. Integer vitae interdum felis.</p>
                    </div>
                    <div className="main-description-product">
                        <p classNam="description-product-para">Sed nisl justo, mollis quis accumsan ut, dictum vel turpis. Sed sit amet volutpat turpis. Nam mattis, risus vel auctor venenatis, eros lacus fermentum nisl, at ultrices felis elit sed odio. In nec eros ac leo malesuada commodo in quis elit. Vivamus vehicula arcu id lorem elementum lacinia. Sed pharetra, eros ac eleifend placerat, massa nisi venenatis quam, eget maximus leo nunc in justo. Nam orci neque, pretium id rutrum venenatis, convallis a ante. Pellentesque ante metus, consequat sit amet massa vitae, condimentum vehicula ex. Vivamus congue ut enim ut malesuada. Morbi auctor nisl eu posuere sodales.
                            Sed nisl justo, mollis quis accumsan ut, dictum vel turpis. Sed sit amet volutpat turpis. Nam mattis, risus vel auctor venenatis, eros lacus fermentum nisl, at ultrices felis elit sed odio. In nec eros ac leo malesuada commodo in quis elit. Vivamus vehicula arcu id lorem elementum lacinia. Sed pharetra, eros ac eleifend placerat, massa nisi venenatis quam, eget maximus leo nunc in justo. Nam orci neque, pretium id rutrum venenatis, convallis a ante. Pellentesque ante metus, consequat sit amet massa vitae, condimentum vehicula ex. Vivamus congue ut enim ut malesuada. Morbi auctor nisl eu posuere sodales.
                        </p>
                    </div>
                    <h3 className="main-description-heading">
                        Specification
                    </h3>
                    <div className="main-description-product">
                        {product.specifications && product.specifications.map((p) => (
                            <p classNam="description-product-para-spec">
                                {p.name}:
                                {p.value}
                            </p>
                        ))}

                    </div>
                </div>
            </div>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
                <iframe width="868" height="488" src="https://www.youtube.com/embed/m9s1NQG3TNY" title="MR BEAST PARODY 🤑 Ft. INDIAN CREATORS | CARRYMINATI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ borderRadius: 5 }}></iframe>
            </div>

            <div className="details-main-oth-product">
                {/* <ProductCard/> */}
            </div>
        </div>
    )
}

export default Productdetails;