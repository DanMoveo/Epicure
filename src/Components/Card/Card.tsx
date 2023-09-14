// Card.tsx

import React from "react";
import "./Card.scss";
import * as imagee from "../../Services/Images";

interface CardProps {
  image: string;
  restaurantName: string;
  chefName?: string;
  price?: string;
  additionalImage?: string[];
}

const Card: React.FC<CardProps> = ({
  image,
  restaurantName,
  chefName,
  price,
  additionalImage,
}) => {
  return (
    <div className="restaurantCard">
      <img src={image} alt="restaurant" className="restaurant-image" />
      <div className="textContainer">
        <h2 className="restaurant-name">{restaurantName}</h2>
        {additionalImage && (
          <div className="additionalImages">
            {additionalImage.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Additional ${index + 1}`} />
            ))}
          </div>
        )}

        <span className="chef-name">{chefName}</span>
        {price && (
          <div className="price-container">
            <span className="price">₪{price}</span>
            <img src={imagee.line} alt="line" className="line" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
