import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./Designs/ProdductCarosel.css";

const ProductCarousel = ({productImages}) => {
    return (
     <>
        <Carousel className='image-carousel' autoPlay={true} interval={2000} infiniteLoop>
                {productImages.map((sourse) => (
                <div>
                    <img src={sourse} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                ))}
            </Carousel>
     </>   
    )
}

export default ProductCarousel;
