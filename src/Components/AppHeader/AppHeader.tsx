// AppHeader.tsx

import React from "react";
import "./AppHeader.scss";
import Stripes from "./Stripes/Stripes";
import ForkKnifeIcon from "./ForkKnifeIcon/ForkKnifeIcon";
import Actions from "./Actions/Actions";
import TextButtons from "./TextButtons/TextButtons";
import useIsMobile from "../../Hooks/useIsMobile";

const AppHeader: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="app-header">
        <Stripes></Stripes>
        <ForkKnifeIcon></ForkKnifeIcon>
        {!isMobile && <TextButtons />}
        <Actions></Actions>
      </div>
    </>
  );
};

export default AppHeader;
