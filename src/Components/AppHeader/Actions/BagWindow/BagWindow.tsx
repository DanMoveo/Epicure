// BagWindow.tsx

import React, { useEffect, useRef } from "react";
import "./BagWindow.scss";
import * as Images from "../../../../Services/Images";

interface Props {
  closeWindow: () => void;
}

const BagWindow: React.FC<Props> = ({ closeWindow }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!event.target) return;

      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".icon")
      ) {
        closeWindow();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [closeWindow]);

  return (
    <div ref={popupRef} className="bag_window">
      <img src={Images.x} alt="x" className="icon" onClick={closeWindow} />
      <div className="bagContainer">
        <img src={Images.big_bag} alt="bag" className="bag_icon" />
        <h2 className="text_bag_window">YOUR BAG IS EMPTY</h2>
        <button className="orderButton">ORDER HISTORY</button>
      </div>
    </div>
  );
};

export default BagWindow;
