import React, { useEffect, useState } from "react";
import { MainHeader } from "./header.styles";
import TopHeaderComponent from "./topHeader";
import BottomHeaderComponent from "./bottomHeader";

export interface ICityChangeBody {
  handleChangeUpperUserCityID: (changedUpperCityID: number) => void;
}

function Header({ handleChangeUpperUserCityID }: ICityChangeBody) {
  const [visibleBottomHeader, setVisibleBottomHeader] = useState(true);

  const changeUserCityID = (changedCityID: number) => {
    handleChangeUpperUserCityID(changedCityID);
  };

  useEffect(() => {
    const scrollListener = () => setVisibleBottomHeader(window.scrollY <= 60);
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <MainHeader>
      <TopHeaderComponent handleChangeUpperUserCityID={changeUserCityID} />
      {visibleBottomHeader && <BottomHeaderComponent />}
    </MainHeader>
  );
}

export default Header;
