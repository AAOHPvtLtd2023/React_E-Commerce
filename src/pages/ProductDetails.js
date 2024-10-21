import React from "react";
import "./ProductDetails.css";
import ProductCard from "../components/ProductSlider";

const Productdetails = () => {
    return (
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
                        <span className="main-price-offerprice">₹14999</span>
                        <span className="main-price-baseprice">₹21999</span>
                        <span className="main-price-discount">(22% 0ff)</span>
                    </div>
                    <div className="details-main-detailsword">
                        <p className="main-detailsword-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus bibendum laoreet. Pellentesque ullamcorper hendrerit ornare. Nulla et metus sit amet urna dignissim viverra et vitae elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ut aliquet massa. Aenean vitae suscipit tellus. Maecenas pharetra ultricies nunc, id sodales nibh pharetra eu. Nullam eu metus non dui rhoncus placerat. Vestibulum eu blandit nunc, a mollis nunc. Mauris hendrerit arcu ut leo feugiat, vitae tincidunt tortor viverra.
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
                    <div className="details-main-quotes">
                        <span className="main-quotes-content">
                            Get Quotes
                        </span>
                    </div>
                </div>
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
                        Pujankaa sha busy ki???
                    </h3>
                    <div className="main-description-product">
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