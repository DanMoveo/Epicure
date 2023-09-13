// Actions.tsx
import React, { useState } from "react";
import "./Actions.scss";
import * as Images from "../../../Services/Images";
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
      <img src={Images.search} alt="search" onClick={openSearchWindow} />
      {isSearchWindowOpen && <SearchWindow closeWindow={openSearchWindow} />}
      <img src={Images.user} alt="user" className="icon" />
      <img
        src={Images.bag}
        alt="bag"
        onClick={openBagWindow}
        className="icon"
      />
      {isBagWindowOpen && <BagWindow closeWindow={openBagWindow} />}
    </div>
  );
};

export default Actions;
