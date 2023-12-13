import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import icon1 from '../icon/icon1.png';
import icon2 from '../icon/icon2.png';
import icon3 from '../icon/icon3.png';


const ProductSlide = () => {
  return (
    <Splide
      options={ {
        rewind: true,
        gap   : '10rem',
        type   : 'loop',
        padding: '5rem',
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img src={icon1} alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src={icon2} alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src={icon3} alt="Image 3"/>
      </SplideSlide>
    </Splide>
  );
}

export default ProductSlide;