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
  };

  const closeSearchWindow = () => {
    setIsSearchWindowOpen(false);
  };

  const openBagWindow = () => {
    setIsBagWindowOpen(!isBagWindowOpen);
  };
  const closeBagWindow = () => {
    setIsBagWindowOpen(false);
  };

  return (
    <div className="actions">
      <img
        src={Images.search}
        alt="search"
        className="searchIcon"
        onClick={openSearchWindow}
      />
      {isSearchWindowOpen && <SearchWindow closeWindow={closeSearchWindow} />}
      <img src={Images.user} alt="user" className="icon" />
      <img
        src={Images.bag}
        alt="bag"
        onClick={openBagWindow}
        className="icon"
      />
      {isBagWindowOpen && <BagWindow closeWindow={closeBagWindow} />}
    </div>
  );
};

export default Actions;
