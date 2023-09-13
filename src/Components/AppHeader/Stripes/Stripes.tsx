// Stripes.tsx

import React, { useState } from "react";
import "./Stripes.scss";
import * as images from "../../../services/images";
import StripesWindow from "./StripsWindow/StripesWindow";

const Stripes: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <img
        src={images.Stripes}
        alt="Stripes"
        className="icon"
        onClick={openModal}
      />
      {isModalOpen && <StripesWindow closeModal={openModal} />}
    </>
  );
};

export default Stripes;
