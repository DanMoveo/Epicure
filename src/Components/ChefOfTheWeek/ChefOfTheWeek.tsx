// ChefOfTheWeek.tsx

import React from "react";
import "./ChefOfTheWeek.scss";
import yossi from "../../Images/yossi.png";
import { text } from "../../Services/textConstants";

const ChefOfTheWeek: React.FC = () => {
  return (
    <div className="container">
      <h2 className="title">CHEF OF THE WEEK:</h2>
      <img src={yossi} alt="yossi"></img>
      <div className="window">
        <h2 className="yossi">{text.chefOfTheWeekName}</h2>
      </div>
      <p className="text">{text.chefOfTheWeekText}</p>
    </div>
  );
};

export default ChefOfTheWeek;
