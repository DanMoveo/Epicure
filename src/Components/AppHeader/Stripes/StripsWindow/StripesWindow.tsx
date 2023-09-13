// StripesWindow.tsx

import "./StripesWindow.scss";
import * as images from "../../../../services/images";
import { NavLink } from "react-router-dom";

interface Props {
  closeModal: () => void;
}

const StripesWindow: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="stripes_window">
        <img src={images.x} alt="x" className="icon_x" onClick={closeModal}/>
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
