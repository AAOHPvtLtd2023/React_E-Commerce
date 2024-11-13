import React, { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import { db } from "./firebaase.js";  // Import your Firebase setup
import './ProductGallery.css';

const ProductGallery = () => {
  const [images, setImages] = useState([]);

  // Fetch images from Firestore
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const imagesSnapshot = await db.collection("gallery").get();
        const imagesData = imagesSnapshot.docs.map(doc => {
          const image = doc.data();
          return {
            src: image.url,
            thumbnail: image.url,  // Assuming the thumbnail and full image are the same
            caption: "", // You can add captions if needed
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            id: doc.id, // Optionally store the doc ID
          };
        });
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchGalleryImages();
  }, []);

  return (
    <div>
      {/* Display the gallery */}
      <Gallery images={images} style={{ gap: 20 }} />
    </div>
  );
};

export default ProductGallery;
