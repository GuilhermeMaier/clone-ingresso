import React from "react";
import Footer from "./components/footer";
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
      <Footer />
    </App>
  );
}

export default Index;
