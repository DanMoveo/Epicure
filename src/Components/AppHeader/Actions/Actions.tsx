// Actions.tsx
import React, { useState } from "react";
import "./Actions.scss";
import * as Images from "../../../Services/Images";
import BagWindow from "./BagWindow/BagWindow";
import SearchWindow from "./SearchWindow/SearchWindow";

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
      {isUserWindowOpen && (
        <div className="userWindowContainer">
          <img
            src={Images.x}
            alt="x"
            className="icon"
            onClick={closeUserWindow}
          />
          <div className="userWindowTextContainer">
            <span className="signInTitle">SIGN IN</span>
            <span className="continerLabel">
              To continue the order, please sign in
            </span>
            <input type="text" id="textInput" className="detailsInput" placeholder="Email adress" />
            <input type="text" id="textInput" className="detailsInput" placeholder="Password"/>
            <button className="loginButton">LOGIN</button>
            <button className="forgetButton">Forget password?</button>
            <div className="orContainer">
              <img src={Images.line} alt="line" className="line" />
              <span className="orText"> or</span>
              <img src={Images.line} alt="line" className="line" />
            </div>
            <button className="signUpButton">SIGN UP</button>
          </div>
        </div>
      )}

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
