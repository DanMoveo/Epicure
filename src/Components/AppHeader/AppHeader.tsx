// AppHeader.tsx

import React from "react";
import "./AppHeader.scss";
import Stripes from "./Stripes/Stripes";
import ForkKnifeIcon from "./ForkKnifeIcon/ForkKnifeIcon";
import Actions from "./Actions/Actions";

const AppHeader: React.FC = () => {
  return (
    <>
      <div className="app-header">
        <Stripes></Stripes>
        <ForkKnifeIcon></ForkKnifeIcon>
        <Actions></Actions>
      </div>
    </>
  );
};

export default AppHeader;
