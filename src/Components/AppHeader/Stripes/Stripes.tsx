// Stripes.tsx

import React, { useState } from "react";
import "./Stripes.scss";
import * as Images from "../../../Services/Images";
import StripesWindow from "./StripsWindow/StripesWindow";

const Stripes: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <img
        src={Images.Stripes}
        alt="Stripes"
        className="stripesIcon"
        onClick={openModal}
      />
      {isModalOpen && <StripesWindow closeModal={openModal} />}
    </>
  );
};

export default Stripes;
