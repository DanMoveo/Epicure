// Actions.tsx
import React, { useState } from "react";
import "./Actions.scss";
import * as images from "../../../services/images";
import BagWindow from "./BagWindow/BagWindow";
import SearchWindow from "./SearchWindow/SearchWindow";

const Actions: React.FC = () => {
  const [isSearchWindowOpen, setIsSearchWindowOpen] = useState(false);
  const [isBagWindowOpen, setIsBagWindowOpen] = useState(false);

  const openSearchWindow = () => {
    setIsSearchWindowOpen(!isSearchWindowOpen);
    setIsBagWindowOpen(false);
    console.log("search open");
  };

  const openBagWindow = () => {
    setIsBagWindowOpen(!isBagWindowOpen);
    setIsSearchWindowOpen(false);
  };

  return (
    <div className="actions">
      <button className="icon">
        <img src={images.search} alt="search" onClick={openSearchWindow} />
      </button>
      {isSearchWindowOpen && <SearchWindow closeWindow={openSearchWindow} />}

      <button className="icon">
        <img src={images.user} alt="user" />
      </button>

      <button className="icon">
        <img src={images.bag} alt="bag" onClick={openBagWindow} />
      </button>
      {isBagWindowOpen && <BagWindow />}
    </div>
  );
};

export default Actions;
