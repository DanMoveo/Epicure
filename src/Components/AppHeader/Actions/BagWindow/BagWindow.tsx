// BagWindow.tsx

import React from "react";
import "./BagWindow.scss";
import * as images from "../../../../services/images";


const BagWindow: React.FC = () => {

  return (
        <div className="bag_window">
          <img src={images.big_bag} alt="bag" className="bag_icon" />
          <h2 className="text_bag_window">YOUR BAG IS EMPTY</h2>
        </div>

  );
};

export default BagWindow;