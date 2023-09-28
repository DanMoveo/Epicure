// Actions.tsx
import React, { useState } from "react";
import "./Actions.scss";
import * as Images from "../../../Services/Images";
import BagWindow from "./BagWindow/BagWindow";
import SearchWindow from "./SearchWindow/SearchWindow";
import UserWindow from "./UserWindow/UserWindow";
import Modal from "../../Modal/Modal";

const Actions: React.FC = () => {
  const [isSearchWindowOpen, setIsSearchWindowOpen] = useState(false);
  const [isBagWindowOpen, setIsBagWindowOpen] = useState(false);
  const [isUserWindowOpen, setIsUserWindowOpen] = useState(false);

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

  const openUserWindow = () => {
    setIsUserWindowOpen(true);
  };

  const closeUserWindow = () => {
    setIsUserWindowOpen(false);
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
      <img
        src={Images.user}
        alt="user"
        className="icon"
        onClick={openUserWindow}
      />
      <div className="hiddingFromMobile">
        {isUserWindowOpen && (
          <Modal>
            <UserWindow closeWindow={closeUserWindow} />
          </Modal>
        )}
      </div>

      <div className="hiddingFromDesktop">
        {isUserWindowOpen && <UserWindow closeWindow={closeUserWindow} />}
      </div>

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
