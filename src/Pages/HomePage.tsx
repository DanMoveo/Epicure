// HomePage.tsx

import React from "react";

import AppHeader from "../Components/AppHeader/AppHeader";
import TableImage from "../Components/TableImage/TableImage";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <TableImage></TableImage>
    </>
  );
};

export default HomePage;
