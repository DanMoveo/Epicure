// Actions.tsx
import React, { useRef } from "react";
import "./UserWindow.scss";
import * as Images from "../../../../Services/Images";
import { useClickOutsideHandler } from "../../../../Hooks/useClickOutsideHandler";

interface Props {
  closeWindow: () => void;
}

const UserWindow: React.FC<Props> = ({ closeWindow }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  useClickOutsideHandler(popupRef, () => {
    closeWindow();
  });

  return (
    <div ref={popupRef} className="userWindowContainer">
        <img src={Images.x} alt="x" className="icon" onClick={closeWindow} />
      <div className="userWindowTextContainer">
        <span className="signInTitle">SIGN IN</span>
        <span className="continerLabel">
          To continue the order, please sign in
        </span>
        <input
          type="text"
          id="textInput"
          className="detailsInput"
          placeholder="Email adress"
        />
        <input
          type="text"
          id="textInput"
          className="detailsInput"
          placeholder="Password"
        />
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
  );
};

export default UserWindow;
