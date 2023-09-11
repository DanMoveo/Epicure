// ChefOfTheWeek.tsx

import React from "react";
import "./ChefOfTheWeek.scss";
import yossi from "../../images/yossi.png";

const ChefOfTheWeek: React.FC = () => {
  return (
    <div className="container">
      <h2 className="title">CHEF OF THE WEEK:</h2>
      <img src={yossi} alt="yossi"></img>
      <div className="window">
        <h2 className="yossi">Yossi Shitrit</h2>
      </div>
      <p className="text">
        Chef Yossi Shitrit has been living and breathing his culinary dreams for
        more than two decades, including running the kitchen in his first
        restaurant, the fondly-remembered Violet, located in Moshav Udim.
        Shitrit's creativity and culinary acumen born of long experience are
        expressed in the every detail of each and every dish.
      </p>
    </div>
  );
};

export default ChefOfTheWeek;
