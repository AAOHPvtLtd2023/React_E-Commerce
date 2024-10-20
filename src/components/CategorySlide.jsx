import React from "react";
import '../components/Designs/CategorySlide.css';

const categories = [
  "Power Tools",
  "Hand Tools",
  "Gardening Equipment",
  "Electrical Tools",
  "Safety Gear",
  "Power Tools",
  "Hand Tools",
  "Gardening Equipment",
  "Electrical Tools",
  "Safety Gear",
  "Power Tools",
  "Hand Tools",
  "Gardening Equipment",
  "Electrical Tools",
  "Safety Gear",
  "Power Tools",
  "Hand Tools",
  "Gardening Equipment",
  "Electrical Tools",
  "Safety Gear",
  "Power Tools",
  "Hand Tools",
  "Gardening Equipment",
  "Electrical Tools",
  "Safety Gear",
];

const CategorySlide = () => {
  return (
    <div className="category-slide">
      
      <div>
        {categories.map((category, index) => (
          <div className="category-slide__item">
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlide;
