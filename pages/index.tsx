import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import { App } from "./index.styles";

function Index() {
  return (
    <App>
      <Header />
      <Hero />
    </App>
  );
}

export default Index;
