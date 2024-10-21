import React from "react";
import '../components/Designs/CategorySlide.css';


const CategorySlide = ({ categories }) => {
  return (
    <div className="category-slide">
      <div>
        {categories.map((category) => (
          <div className="category-slide__item">
            <a href={`/product/${category.id}`}>
              <span>{category.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlide;
