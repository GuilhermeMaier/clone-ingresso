import React, { useEffect, useState } from "react";
import BottomFooterComponent from "./bottomFooter";
import MainFooter from "./footer.styles";
import TopFooterComponent from "./topFooter";

function Footer() {
  return (
    <MainFooter>
      <TopFooterComponent />
      <BottomFooterComponent />
    </MainFooter>
  );
}

export default Footer;
