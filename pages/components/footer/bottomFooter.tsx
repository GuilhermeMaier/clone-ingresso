import React from "react";
import { CentralizedContainer, VeticalAligner } from "../common/common.styles";
import {
  BottomFooter,
  BottomFooterContainer,
  FooterAllItemsContainer,
  FooterItemContainer,
  FooterTextContainer,
} from "./footer.styles";

function BottomFooterComponent() {
  return (
    <BottomFooterContainer>
      <CentralizedContainer>
        <BottomFooter>
          <VeticalAligner>
            <FooterAllItemsContainer>
              <FooterItemContainer>
                <FooterTextContainer>FILMES</FooterTextContainer>
              </FooterItemContainer>
              <FooterItemContainer>
                <FooterTextContainer>CINEMAS</FooterTextContainer>
              </FooterItemContainer>
              <FooterItemContainer>
                <FooterTextContainer>EVENTOS</FooterTextContainer>
              </FooterItemContainer>
              <FooterItemContainer>
                <FooterTextContainer>ROCK IN RIO</FooterTextContainer>
              </FooterItemContainer>
            </FooterAllItemsContainer>
          </VeticalAligner>
        </BottomFooter>
      </CentralizedContainer>
    </BottomFooterContainer>
  );
}

export default BottomFooterComponent;
