import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import ProductCard from "../components/ProductSlider";
import ProductCarousel from "../components/ProductCarsoual";
import { Rating } from "@mui/material";
import { db } from "../components/firebaase.js";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Productdetails = () => {
  const { catId, productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const snapshot = await db
          .collection("categories")
          .doc(catId)
          .collection("products")
          .doc(productId)
          .get();

        const productData = snapshot.data();
        setProduct(productData);
        console.log(productData);

        // Set video URL if available
        if (productData.videoURL) {
          setVideoUrl(productData.videoURL.replace("watch?v=", "embed/"));
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchProduct();
  }, [catId, productId]);

  const trimDescription = (description) => {
    // Split the description into words
    const words = description.split(" ");

    // Take the first 60 words and join them back into a string
    const trimmedDescription = words.slice(0, 30).join(" ");

    // If the description is longer than 60 words, append '...'
    return trimmedDescription.length < description.length
      ? trimmedDescription + "..."
      : trimmedDescription;
  };

  const renderVideo = () => {
    return videoUrl ? (
      <div className="details-main-wrap-details">
        <div className="details-main-video">
          <h3 className="main-description-heading">Product Video</h3>

          <iframe
            width="80%"
            height="400px"
            src={videoUrl}
            title="Product Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ) : null;
  };

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
  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <>
        <div className="details-main">
          <div className="details-main-wrap">
            <div className="details-main-wrap-image">
              <Skeleton height={300} width="100%" />
            </div>
            <div className="details-main-wrap-smalldetils">
              <Skeleton height={30} width="70%" />
              <div className="details-main-reviews">
                <Skeleton height={20} width={150} />
                <Skeleton height={20} width={100} style={{ marginLeft: 10 }} />
              </div>
              <div className="details-main-price">
                <Skeleton height={30} width={100} />
                <Skeleton height={20} width={80} style={{ marginLeft: 10 }} />
              </div>
              <div className="details-main-detailsword">
                <Skeleton height={50} count={3} />
              </div>
              <div className="details-main-bajarangi">
                <Skeleton height={20} width="50%" />
              </div>
              <div className="details-main-buttons">
                <Skeleton height={40} width={120} />
                <Skeleton height={40} width={120} style={{ marginLeft: 10 }} />
              </div>
            </div>
          </div>
          <div className="details-main-wrap-details">
            <h3 className="main-description-heading">Product Description</h3>
            <Skeleton height={20} count={3} />
            <h3 className="main-description-heading">Specification</h3>
            <Skeleton height={20} count={3} />
          </div>
          <div className="details-main-similar-product">
            <h3>Similar Products</h3>
            <div className="similar-product-grid">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="product-card-skeleton">
                  <Skeleton height={200} />
                  <Skeleton height={20} width="80%" />
                  <Skeleton height={20} width="50%" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </>
    )
  }

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
        {product && (
          <div className="details-main-wrap-smalldetils">
            <span className="details-main-title">{product.title}</span>
            <div className="details-main-reviews">
              {
                product.rating &&
                <Rating name="read-only" value={product.rating} readOnly color="#ff6a00" />
              }
              <span className="main-reviews-content">
                {product.reviews} reviews
              </span>
            </div>
            <div className="details-main-price">
              <span className="main-price-offerprice">₹{product.price}</span>
              <span className="main-price-baseprice">
                ₹{product.price + 20000}
              </span>
              <span className="main-price-discount">(Offer applied)</span>
            </div>
            <div className="details-main-detailsword">
              {product.description && (
                <p
                  className="main-detailsword-content"
                  dangerouslySetInnerHTML={{
                    __html: trimDescription(product.description),
                  }}
                ></p>
              )}
            </div>
            <div className="details-main-bajarangi">
              <div className="details-main-content">
                <span className="main-content-brand">Brand:</span>
                <span className="main-content-industry">
                  Bajarangi Industries
                </span>
              </div>
            </div>
            <div className="details-main-buttons">
              <div className="details-main-quotes">
                <a href={`/enquery/${product.title}`}>
                  <span className="main-quotes-content">Get Quotes</span>
                </a>
              </div>
              <div className="details-main-quotes">
                <a href="tel:9777062436">
                  <span className="main-quotes-content">Call Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="details-main-wrap-details">
        <div className="details-main-descriptionescription">
          <h3 className="main-description-heading">Product Description</h3>
          <div className="main-description-product">
            <p
              className="description-product-para"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>
          <h3 className="main-description-heading">Specification</h3>
          <div className="main-description-product">
            <div className="main-description-product">
              <p
                className="description-product-para"
                dangerouslySetInnerHTML={{ __html: product.specifications }}
              />
            </div>
          </div>
        </div>
      </div>

      {renderVideo()}

      <div className="details-main-similar-product">
        <h3>Similar Products</h3>
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Productdetails;
