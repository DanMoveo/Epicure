// TableImage.tsx

import React from "react";
import "./TableImage.scss";
import * as images from "../../services/images";

const TableImage: React.FC = () => {
  return (
    <div className="img-container">
      <img src={images.table} alt="table" className="hero-img" />
      <div className="hero_window">
        <h2 className="text">
          Epicure works with the top chef restaurants in Tel Aviv
        </h2>
        <div className="input-container">
          <img src={images.search} alt="search" className="icon" />
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
  );
};

export default TableImage;
