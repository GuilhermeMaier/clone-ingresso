import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiYoutube, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { CentralizedContainer } from "../common/common.styles";
import {
  FooterAllItemsContainer,
  FooterHelpContainer,
  FooterIconContainer,
  FooterImagesContainer,
  FooterItemContainer,
  FooterTextContainer,
  TopFooter,
  TopFooterContainer,
} from "./footer.styles";

function TopFooterComponent() {
  const [userCity, setUserCity] = useState("Selecione uma Cidade");
  const [greatLogo, setGreatLogo] = useState(true);

  useEffect(() => {
    const scrollListener = () => setGreatLogo(window.scrollY <= 60);
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <TopFooterContainer>
      <CentralizedContainer>
        <TopFooter>
          <FooterAllItemsContainer>
            <FooterItemContainer style={{ width: 280 }}>
              <FooterTextContainer>BAIXE NOSSO APP</FooterTextContainer>
              <FooterImagesContainer>
                <Image
                  width={130}
                  height={45}
                  src={"/images/apple-store.svg"}
                />
                <div style={{ borderRadius: 6, border: "1px solid #999" }}>
                  <Image
                    width={130}
                    height={40}
                    src={"/images/google-play.png"}
                  />
                </div>
              </FooterImagesContainer>
            </FooterItemContainer>
            <FooterItemContainer style={{ width: 280 }}>
              <FooterTextContainer>
                SIGA-NOS NAS REDES SOCIAIS
              </FooterTextContainer>
              <FooterImagesContainer style={{ justifyContent: "start" }}>
                <FooterIconContainer style={{ background: "#1977f3" }}>
                  <FiFacebook />
                </FooterIconContainer>
                <FooterIconContainer style={{ background: "#ff3300" }}>
                  <FiYoutube />
                </FooterIconContainer>
                <FooterIconContainer style={{ background: "#f90" }}>
                  <FiInstagram />
                </FooterIconContainer>
                <FooterIconContainer style={{ background: "#0077b5" }}>
                  <FiLinkedin />
                </FooterIconContainer>
              </FooterImagesContainer>
            </FooterItemContainer>
            <FooterItemContainer style={{ width: 280 }}>
              <FooterTextContainer>PRECISA DE AJUDA?</FooterTextContainer>
              <FooterImagesContainer>
                <FooterHelpContainer>ATENDIMENTO</FooterHelpContainer>
              </FooterImagesContainer>
            </FooterItemContainer>
          </FooterAllItemsContainer>
        </TopFooter>
      </CentralizedContainer>
    </TopFooterContainer>
  );
}

export default TopFooterComponent;
