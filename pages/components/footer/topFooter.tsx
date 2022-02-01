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
  FooterTextClickableContainer,
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
                <FooterTextClickableContainer
                  href={
                    "https://itunes.apple.com/br/app/ingresso-com/id1165054492?mt=8"
                  }
                  target={"_blank"}
                >
                  <Image
                    width={130}
                    height={45}
                    src={"/images/apple-store.svg"}
                  />
                </FooterTextClickableContainer>
                <FooterTextClickableContainer
                  style={{
                    borderRadius: 6,
                    border: "1px solid #999",
                    padding: 0,
                    height: "fit-content",
                    marginTop: 5,
                  }}
                  href={
                    "https://play.google.com/store/apps/details?id=com.ingresso.cinemas&hl=pt_BR"
                  }
                  target={"_blank"}
                >
                  <Image
                    width={130}
                    height={38}
                    src={"/images/google-play.png"}
                  />
                </FooterTextClickableContainer>
              </FooterImagesContainer>
            </FooterItemContainer>
            <FooterItemContainer style={{ width: 280 }}>
              <FooterTextContainer>
                SIGA-NOS NAS REDES SOCIAIS
              </FooterTextContainer>
              <FooterImagesContainer style={{ justifyContent: "start" }}>
                <FooterTextClickableContainer
                  href={"http://facebook.com/ingressocom/"}
                  target={"_blank"}
                >
                  <FooterIconContainer style={{ background: "#1977f3" }}>
                    <FiFacebook />
                  </FooterIconContainer>
                </FooterTextClickableContainer>
                <FooterTextClickableContainer
                  href={"http://youtube.com/user/Ingressocom"}
                  target={"_blank"}
                >
                  <FooterIconContainer style={{ background: "#ff3300" }}>
                    <FiYoutube />
                  </FooterIconContainer>
                </FooterTextClickableContainer>
                <FooterTextClickableContainer
                  href={"http://www.instagram.com/ingressocom/"}
                  target={"_blank"}
                >
                  <FooterIconContainer style={{ background: "#f90" }}>
                    <FiInstagram />
                  </FooterIconContainer>
                </FooterTextClickableContainer>
                <FooterTextClickableContainer
                  href={"https://www.linkedin.com/company/ingresso-com/"}
                  target={"_blank"}
                >
                  <FooterIconContainer style={{ background: "#0077b5" }}>
                    <FiLinkedin />
                  </FooterIconContainer>
                </FooterTextClickableContainer>
              </FooterImagesContainer>
            </FooterItemContainer>
            <FooterItemContainer style={{ width: 280 }}>
              <FooterTextContainer>PRECISA DE AJUDA?</FooterTextContainer>
              <FooterImagesContainer>
                <FooterHelpContainer
                  href={"https://atendimento.ingresso.com/hc/pt-br"}
                  target={"_blank"}
                >
                  ATENDIMENTO
                </FooterHelpContainer>
              </FooterImagesContainer>
            </FooterItemContainer>
          </FooterAllItemsContainer>
        </TopFooter>
      </CentralizedContainer>
    </TopFooterContainer>
  );
}

export default TopFooterComponent;
