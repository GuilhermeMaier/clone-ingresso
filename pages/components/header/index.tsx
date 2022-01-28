import React from "react";
import { MainHeader } from "./header.styles";
import TopHeaderComponent from "./topHeader";
import BottomHeaderComponent from "./bottomHeader";

function Header() {
  return (
    <MainHeader>
      <TopHeaderComponent />
      <BottomHeaderComponent />
    </MainHeader>
  );
}

export default Header;
