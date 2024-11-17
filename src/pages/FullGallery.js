import React, { useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import { db } from "../components/firebaase.js"; // Import your Firebase setup

const FullGallery = () => {
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
            thumbnail: image.url,
            caption: image.caption || "",
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            id: doc.id,
            tags: [
              {value: image.loc|| "", title: image.loc || ""}
            ]
          };
        });
        setImages(imagesData);
        console.log(imagesData);
        console.log("Fullpage is here!!")
      } catch (error) {
        console.error("Error fetching gallery images:", error);
      }
    };

    fetchGalleryImages();
  }, []);

  return (
    <>
      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}> */}
      {images &&
        <Gallery images={images} rowHeight={150} margin={10} />
      }
      {/* </div> */}
    </>
  );
};

export default FullGallery;
