// SearchWindow.tsx

import React, { useEffect, useRef } from "react";
import "./SearchWindow.scss";
import * as Images from "../../../../Services/Images";

interface Props {
  closeWindow: () => void;
}

const SearchWindow: React.FC<Props> = ({ closeWindow }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!event.target) return;

      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(".searchIcon")
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
