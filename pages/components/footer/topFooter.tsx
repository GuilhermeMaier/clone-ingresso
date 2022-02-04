import React from "react";
import Image from "next/image";
import { FiYoutube, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { CentralizedContainer } from "../common/common.styles";
import {
  FooterAllItemsContainer,
  FooterHelpContainer,
  FooterIconContainer,
  FooterImagesContainer,
  FooterItemContainer,
  FooterItemImagesContainer,
  FooterTextClickableContainer,
  FooterTextContainer,
  TopFooter,
  TopFooterContainer,
} from "./footer.styles";

interface IFooterBody {
  isResponsive: boolean;
}

function TopFooterComponent({ isResponsive }: IFooterBody) {
  return (
    <TopFooterContainer>
      <CentralizedContainer>
        <TopFooter>
          <FooterAllItemsContainer>
            {isResponsive == false && (
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
                      alt="apple-store"
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
                      alt="play-store"
                    />
                  </FooterTextClickableContainer>
                </FooterImagesContainer>
              </FooterItemContainer>
            )}
            <FooterItemImagesContainer>
              {isResponsive == false && (
                <FooterTextContainer>
                  SIGA-NOS NAS REDES SOCIAIS
                </FooterTextContainer>
              )}
              <FooterImagesContainer
                style={{ justifyContent: isResponsive ? "center" : "start" }}
              >
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
                  <FooterIconContainer
                    style={{ background: "#0077b5", marginRight: 0 }}
                  >
                    <FiLinkedin />
                  </FooterIconContainer>
                </FooterTextClickableContainer>
              </FooterImagesContainer>
            </FooterItemImagesContainer>
            {isResponsive == false && (
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
            )}
          </FooterAllItemsContainer>
        </TopFooter>
      </CentralizedContainer>
    </TopFooterContainer>
  );
}

export default TopFooterComponent;
