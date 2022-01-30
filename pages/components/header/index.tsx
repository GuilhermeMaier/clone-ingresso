import React, { useEffect, useState } from "react";
import { MainHeader } from "./header.styles";
import TopHeaderComponent from "./topHeader";
import BottomHeaderComponent from "./bottomHeader";

function Header() {
  const [visibleBottomHeader, setVisibleBottomHeader] = useState(true);

  useEffect(() => {
    const scrollListener = () => setVisibleBottomHeader(window.scrollY <= 60);
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <MainHeader>
      <TopHeaderComponent />
      {visibleBottomHeader && <BottomHeaderComponent />}
    </MainHeader>
  );
}

export default Header;
