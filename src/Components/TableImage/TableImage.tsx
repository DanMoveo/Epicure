// TableImage.tsx

import React from "react";
import "./TableImage.scss";
import * as Images from "../../Services/Images";
import { text } from "../../Services/textConstants";

const TableImage: React.FC = () => {
  return (
    <div className="img-container">
      <img src={Images.table} alt="table" className="hero-img" />
      <div className="hero_window">
        <div className="textContainer">
          <h2 className="text">{text.heroText} </h2>
          <div className="input-container">
            <img src={Images.search} alt="search" className="icon" />
            <input
              type="text"
              name="search-input"
              id="search-input"
              className="search-input"
              placeholder="Search for restaurant cuisine, chef"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableImage;
