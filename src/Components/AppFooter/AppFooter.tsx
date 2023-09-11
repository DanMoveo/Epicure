// AppFooter.tsx

import React from "react";
import "./AppFooter.scss";

const AppFooter: React.FC = () => {
  return (
    <div className="appFooterContainer">
      <button>Contact Us</button>
      <button>Term of Use</button>
      <button>Privacy Policy</button>
    </div>
  );
};

export default AppFooter;
