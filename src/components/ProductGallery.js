import React, { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import { db } from "./firebaase.js";  // Import your Firebase setup
import './ProductGallery.css';
import { useNavigate } from "react-router-dom";


const ProductGallery = () => {
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState(4);
  const navigate = useNavigate();

  // Fetch images from Firestore
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const imagesSnapshot = await db.collection("gallery").get();
        const imagesData = imagesSnapshot.docs.map(doc => {
          const image = doc.data();
          return {
            src: image.url,
            thumbnail: image.url,
            caption: image.loc || "Demo",
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            id: doc.id,
            tags: [
              {value: image.loc|| "", title: image.loc || ""}
            ]
          };
        });
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchGalleryImages();
  }, []);

  // Redirect to full gallery page on "Show More"
  const handleShowMore = () => {
    navigate("/Gallery");
    console.log("Button clicked!!")
  };

  return (
    <div className="gallery-container">
      {/* Display limited images */}
      <Gallery images={images.slice(0, visibleImages)} rowHeight={150} margin={10} />
      {/* Show More button to go to the full gallery */}
      {visibleImages < images.length && (
        <button onClick={handleShowMore} className="show-more-btn">
          Show More
        </button>
      )}
    </div>
  );
};

export default ProductGallery;
