import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Designs/slider.css";
import { db } from "../components/firebaase.js";
import { Link } from 'react-router-dom';

const DemoCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from Firestore and update state
    const fetchImages = async () => {
      try {
        const snapshot = await db.collection('slider').get();
        const imagesData = snapshot.docs.map(doc => ({
          imageUrl: doc.data().photo,
          title: doc.data().title,
          catId: doc.data().category,
          productId: doc.data().product

        }));
        setImages(imagesData);
        console.log(images);
      } catch (error) {
        console.error('Error fetching images from Firestore:', error);
      }
    };

    fetchImages();
  }, []); // Empty dependency array to ensure the effect runs only once

  const onChange = (index, item) => {
    // Handle change event
    console.log(`Index: ${index}, Item: ${item}`);
  };

  const onClickItem = (index, item) => {
    // Handle click on item event
    console.log(`Index: ${index}, Item: ${item}`);
  };

  const onClickThumb = (index, item) => {
    // Handle click on thumbnail event
    console.log(`Index: ${index}, Item: ${item}`);
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      style={{width:'50%'}}
    >

      {images.map((image, index) => (
        <div key={index}>
          <Link to={"/product/" + image.catId + "/" + image.productId}>
            <img src={image.imageUrl} alt={`image-${index}`} className="imageStyle"/>
            <p className="legend">{image.title}</p>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default DemoCarousel;
