import React, { useEffect, useRef } from "react";
import "./StripesWindow.scss";
import * as Images from "../../../../Services/Images";
import { NavLink } from "react-router-dom";

interface Props {
  closeModal: () => void;
}

const StripesWindow: React.FC<Props> = ({ closeModal }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!event.target) return;

      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".stripesIcon")
      ) {
        closeModal(); 
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [closeModal]);

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
