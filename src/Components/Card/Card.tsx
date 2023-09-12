// Card.tsx

import React from "react";
import "./Card.scss";
import * as imagee from "../../services/images";

interface CardProps {
  image: string;
  restaurantName: string;
  chefName: string;
  price?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  restaurantName,
  chefName,
  price,
}) => {
  return (
    <div className="restaurantCard">
      <img src={image} alt="restaurant" className="restaurant-image" />
      <div className="textContainer">
        <span className="restaurant-name">{restaurantName}</span>
        <span className="chef-name">{chefName}</span>
        <div className="price-container">
          {price && (
            <div className="price-container">
              <span className="price">₪{price}</span>
              <img src={imagee.line} alt="line" className="line" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
