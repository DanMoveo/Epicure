// Actions.tsx
import React, { useState, useEffect, useRef } from "react";
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
  const userWindowRef = useRef<HTMLDivElement | null>(null);

  const openSearchWindow = () => {
    setIsSearchWindowOpen(true);
  };

  const closeSearchWindow = () => {
    setIsSearchWindowOpen(false);
  };

  const openBagWindow = () => {
    setIsBagWindowOpen(true);
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

  useEffect(() => {
    const handleUserWindowClick = (event: MouseEvent) => {
      if (
        userWindowRef.current &&
        !userWindowRef.current.contains(event.target as Node)
      ) {
        closeUserWindow();
      }
    };

    if (isUserWindowOpen) {
      document.addEventListener("mousedown", handleUserWindowClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleUserWindowClick);
    };
  }, [isUserWindowOpen, isBagWindowOpen]);

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
      <div className="hidingFromMobile">
        {isUserWindowOpen && (
          <Modal>
            <UserWindow closeWindow={closeUserWindow} />
          </Modal>
        )}
      </div>

      <div className="hidingFromDesktop">
        {isUserWindowOpen && (
          <div ref={userWindowRef}>
            <UserWindow closeWindow={closeUserWindow} />
          </div>
        )}
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
