// BagWindow.tsx

import React from "react";
import "./BagWindow.scss";
import * as images from "../../../../services/images";

interface Props {
  closeWindow: () => void;
}

const BagWindow: React.FC<Props> = ({ closeWindow }) => {
  return (
    <div className="bag_window">
      <img src={images.x} alt="x" className="icon" onClick={closeWindow} />
      <div className="bagContainer">
        <img src={images.big_bag} alt="bag" className="bag_icon" />
        <h2 className="text_bag_window">YOUR BAG IS EMPTY</h2>
      </div>
    </div>
  );
};

export default BagWindow;
