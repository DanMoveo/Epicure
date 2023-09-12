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
      <button className="icon" onClick={openModal}>
        <img src={images.Stripes} alt="Stripes" />
      </button>
      {isModalOpen && <StripesWindow closeModal={openModal} />}
    </>
  );
};

export default Stripes;
