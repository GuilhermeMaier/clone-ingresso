import React, { useEffect, useState } from "react";
import BottomFooterComponent from "./bottomFooter";
import MainFooter from "./footer.styles";
import TopFooterComponent from "./topFooter";

function Footer() {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    onWindowResized();
    window.addEventListener("resize", onWindowResized);
    return () => window.removeEventListener("resize", onWindowResized);
  }, []);

  const onWindowResized = () => {
    setIsResponsive(window.innerWidth < 1100);
  };
  return (
    <MainFooter>
      <TopFooterComponent isResponsive={isResponsive} />
      {isResponsive == false && <BottomFooterComponent />}
    </MainFooter>
  );
}

export default Footer;
