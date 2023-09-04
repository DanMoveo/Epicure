// SearchWindow.tsx

import React from "react";
import "./SearchWindow.scss";
import * as images from "../../../../services/images";

interface Props {
  closeWindow: () => void;
}

const SearchWindow: React.FC<Props> = ({ closeWindow }) => {
  return (
    <div className="search_window">
      <div className="bar_container">
        <button className="icon" onClick={closeWindow}>
          <img src={images.x} alt="x" />
        </button>
        <h2 className="label">Search</h2>
      </div>
      <div className="input_container">
        <img src={images.search} alt="search" className="icon" />
        <input
          type="text"
          placeholder="Search for restaurant cuisine, chef"
          className="input"
        />
      </div>
    </div>
  );
};

export default SearchWindow;
