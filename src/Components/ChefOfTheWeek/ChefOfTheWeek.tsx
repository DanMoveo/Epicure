// ChefOfTheWeek.tsx

import React from "react";
import "./ChefOfTheWeek.scss";
import { text } from "../../Services/textConstants";
import * as image from "../../Services/Images";
import Card from "../Card/Card";

const restaurants = [
  {
    image: image.nithan_thai,
    resturantName: "Onza",
    chefName: "Chef 10",
  },
  {
    image: image.nithan_thai,
    resturantName: "Kitchen Market",
    chefName: "Chef 11",
  },
  {
    image: image.nithan_thai,
    resturantName: "Mashya",
    chefName: "Chef 12",
  },
];

const ChefOfTheWeek: React.FC = () => {
  return (
    <div className="container">
      <span className="title">CHEF OF THE WEEK:</span>
      <div className="chefOfTheWeekContainer">
          <img
            src={image.yossi}
            alt="yossi"
            className="chefOfTheWeekImage"
          ></img>
          <div className="window">
            <span className="chefName">{text.chefOfTheWeekName}</span>
          </div>
        <p className="text">{text.chefOfTheWeekText}</p>
        <span className="chefRestaurants">{text.chefRestaurants}</span>
      </div>
      <div className="cardWeekChefContainer">
        {restaurants.map((restaurant, index) => (
          <Card
            key={index}
            image={restaurants[index].image}
            restaurantName={restaurants[index].resturantName}
          />
        ))}
      </div>
    </div>
  );
};

export default ChefOfTheWeek;
