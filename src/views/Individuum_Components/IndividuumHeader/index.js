import React from "react";
import Header from "../../../components/Header/Header";

import IndividuumHeaderRightLinks from "./IndividuumHeaderRightLinks";

const dashboardRoutes = [];
const IndividuumHeader = () => {
  return (
    <>
      <Header
        color="primary"
        routes={dashboardRoutes}
        brand="Individuum"
        rightLinks={<IndividuumHeaderRightLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
    </>
  );
};

export default IndividuumHeader;
