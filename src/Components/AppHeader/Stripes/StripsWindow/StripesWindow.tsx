// StripesWindow.tsx

import "./StripesWindow.scss";
import * as images from "../../../../services/images";

interface Props {
  closeModal: () => void;
}

const StripesWindow: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="stripes_window">
      <button className="icon_x" onClick={closeModal}>
        <img src={images.x} alt="x" />
      </button>
      <button className="stripes_button">Restaurants</button>
      <button className="stripes_button">Chefs</button>
      <button className="stripes_button">Contact Us</button>
      <button className="stripes_button">Term of Use</button>
      <button className="stripes_button">Privacy Policy</button>
    </div>
  );
};

export default StripesWindow;
