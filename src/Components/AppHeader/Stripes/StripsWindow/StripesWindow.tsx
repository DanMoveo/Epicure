import React, { useRef } from "react";
import "./StripesWindow.scss";
import * as Images from "../../../../Services/Images";
import { NavLink } from "react-router-dom";
import { useClickOutsideHandler } from "../../../../Hooks/useClickOutsideHandler";

interface Props {
  closeModal: () => void;
}

const StripesWindow: React.FC<Props> = ({ closeModal }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);
  useClickOutsideHandler(popupRef, () => {
    closeModal();
  });

  return (
    <div ref={popupRef} className="stripes_window">
      <img src={Images.x} alt="x" className="icon_x" onClick={closeModal} />
      <NavLink to="/restaurants/All" className="stripes_button">
        <button className="stripes_button" onClick={closeModal}>
          Restaurants
        </button>
      </NavLink>
      <button className="stripes_button">Chefs</button>
      <button className="stripes_button">Contact Us</button>
      <button className="stripes_button">Term of Use</button>
      <button className="stripes_button">Privacy Policy</button>
    </div>
  );
};

export default StripesWindow;
