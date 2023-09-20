// SearchWindow.tsx

import React, { useRef } from "react";
import "./SearchWindow.scss";
import * as Images from "../../../../Services/Images";
import { useClickOutsideHandler } from "../../../../Hooks/useClickOutsideHandler";

interface Props {
  closeWindow: () => void;
}

const SearchWindow: React.FC<Props> = ({ closeWindow }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useClickOutsideHandler(popupRef, () => {
    closeWindow();
  });

  return (
    <div ref={popupRef} className="search_window">
      <div className="bar_container">
        <img src={Images.x} alt="x" className="icon" onClick={closeWindow} />
        <h2 className="label">Search</h2>
      </div>
      <div className="input_container">
        <img src={Images.search} alt="search" className=".icon" />
        <input
          type="text"
          placeholder="Search for restaurant cuisine, chef"
          className="input"
        />
      </div>
    </div>
  );
};

export default SearchWindow;
