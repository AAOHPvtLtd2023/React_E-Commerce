import React from "react";
import "./ProductDetails.css";
import ProductCard from "../components/ProductSlider";

const Productdetails = () =>{
    return(
        <div className="details-main">
            <div className="details-main-wrap">
                <div className="details-main-wrap-image">
                    image slider 
                </div>
                <div className="details-main-wrap-smalldetils">
                    <span className="details-main-title">details title</span>
                    <div className="details-main-reviews">
                        <span className="main-reviews-content">4 reviews</span>
                    </div>
                    <div className="details-main-price">
                        <span className="main-price-offerprice">offer price</span>
                        <span className="main-price-baseprice">base price</span>
                        <span className="main-price-discount">deiscount %</span>
                    </div>
                    <div className="details-main-detailsword">
                        <p className="main-detailsword-content">
                            details of 30 words
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
                    </div>
                    <div className="details-main-quotes">
                        <span className="main-quotes-content">
                            Get Quotes
                        </span>
                    </div>
                </div>
            </div>

            <div className="details-main-wrap-details">
               
                <div className="details-main-descriptionescription">
              className="main-description-heading1"       <h3 className="main-description-heading">Pr className="main-description-product"oduct Description</h3>
      className="description-product-para"               <div>
                        <p>Product Description details-1</p>
     className="main-description-product"                </div>
      className="description-product-para"               <div>
                        <p>Product Description details-2</p>
                    </div>
                    <h3>
                        Pujankaa sha busy ki???
    className="main-description-product"                 </h3>
                    <div>
                        <p>
                        Specification details
                        </p>
                    </div>
                </div>
            </div>

            <div className="details-main-oth-product">
                {/* <ProductCard/> */}
            </div>
        </div>
    )
}

export default Productdetails;