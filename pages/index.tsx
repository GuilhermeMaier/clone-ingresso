import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Movies from "./components/movies";
import { App } from "./index.styles";

function Index() {
  return (
    <App>
      <Header />
      <Hero />
      <Movies />
    </App>
  );
}

export default Index;
