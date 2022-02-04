import React, { useState } from "react";
import CopyrightComponent from "./components/copyright/index,";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Movies from "./components/movies";
import { App } from "./index.styles";

function Index() {
  const [userCityID, setUserCityID] = useState<number>(1);

  const changeUserCityID = (changedCityID: number) => {
    setUserCityID(changedCityID);
  };

  return (
    <App>
      <Header handleChangeUpperUserCityID={changeUserCityID} />
      <Hero userCityID={userCityID} />
      <Movies userCityID={userCityID} />
      <Footer />
      <CopyrightComponent />
    </App>
  );
}

export default Index;
