import React, { useEffect, useState } from "react";
import BottomFooterComponent from "./bottomFooter";
import MainFooter from "./footer.styles";
import TopFooterComponent from "./topFooter";

function Footer() {
  const [visibleBottomFooter, setVisibleBottomFooter] = useState(true);

  useEffect(() => {
    const scrollListener = () => setVisibleBottomFooter(window.scrollY <= 60);
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <MainFooter>
      <TopFooterComponent />
      <BottomFooterComponent />
    </MainFooter>
  );
}

export default Footer;
