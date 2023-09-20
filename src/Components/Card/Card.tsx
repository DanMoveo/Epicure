// Card.tsx

import React from "react";
import "./Card.scss";
import * as imagee from "../../Services/Images";

interface CardProps {
  image: string;
  restaurantName: string;
  chefName?: string;
  description?: string;
  price?: string;
  additionalImage?: string[];
  rating?: number;
}

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img key={i} src={imagee.starFull} alt={`Full Star ${i}`} />);
    } else {
      stars.push(
        <img key={i} src={imagee.starEmpty} alt={`Empty Star ${i}`} />
      );
    }
  }
  return stars;
};

const Card: React.FC<CardProps> = ({
  image,
  restaurantName,
  chefName,
  price,
  additionalImage,
  rating,
  description,
}) => {
  return (
    <div className="restaurantCard">
      <img src={image} alt="restaurant" className="restaurant-image" />
      <div className="textContainer">
        <span className="restaurant-name">{restaurantName}</span>
        {additionalImage && (
          <div className="additionalImages">
            {additionalImage.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Additional ${index + 1}`} />
            ))}
          </div>
        )}
        <span className="description">{description}</span>
        <span className="chefName">{chefName}</span>
        {price && (
          <div className="priceContainerMobile">
            <span className="price">₪{price}</span>
            <img src={imagee.line} alt="line" className="line" />
          </div>
        )}
        {price && (
          <div className="priceContainerDesktop">
                        <img src={imagee.line} alt="line" className="line" />
            <span className="price">₪{price}</span>
            <img src={imagee.line} alt="line" className="line" />
          </div>
        )}
        {rating && <div className="rating">{renderStars(rating)}</div>}
      </div>
    </div>
  );
};

export default Card;
