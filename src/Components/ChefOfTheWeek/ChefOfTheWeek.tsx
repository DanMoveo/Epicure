// ChefOfTheWeek.tsx

import React from "react";
import "./ChefOfTheWeek.scss";
import { text } from "../../Services/textConstants";
import * as image from "../../Services/Images";
import Card from "../Card/Card";


type Restaurant = {
  image: string;
  name: string;
  chefName: string;
  rate: number;
};

type ChefOfTheWeekProps = {
  chefOfTheWeekRestaurants: Restaurant[];
};

const ChefOfTheWeek: React.FC<ChefOfTheWeekProps> = ({ chefOfTheWeekRestaurants }) => {  return (
    <>
      <span className="chefOfTheWeektitle">CHEF OF THE WEEK:</span>
      <div className="chefOfTheWeekContainer">
        <img src={image.yossi} alt="yossi" className="chefOfTheWeekImage"></img>
        <div className="chefOfTheWeekwindow">
          <span className="chefOfTheWeekchefName">{text.chefOfTheWeekName}</span>
        </div>
        <p className="chefOfTheWeektext">{text.chefOfTheWeekText}</p>
      </div>

      <div className="chefOfTheWeekRestaurants">
        <span className="chefOfTheWeekName">{text.chefRestaurants}</span>
        <div className="chefRestaurants">
          {chefOfTheWeekRestaurants.map((restaurant, index) => (
            <Card
              key={index}
              image={chefOfTheWeekRestaurants[index].image}
              restaurantName={chefOfTheWeekRestaurants[index].name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ChefOfTheWeek;
