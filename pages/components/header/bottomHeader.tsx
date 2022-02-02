import React from "react";
import {
  BottomHeader,
  BottomHeaderContainer,
  HeaderAllItemsContainer,
  HeaderClickableTextContainer,
  HeaderItemContainer,
  HeaderTextContainer,
} from "./header.styles";
import { CentralizedContainer, VeticalAligner } from "../common/common.styles";

function BottomHeaderComponent() {
  return (
    <BottomHeaderContainer>
      <CentralizedContainer>
        <BottomHeader>
          <VeticalAligner>
            <HeaderAllItemsContainer>
              <HeaderItemContainer>
                <HeaderClickableTextContainer
                  href={"https://ingresso.com/filmes"}
                  target={"_blank"}
                >
                  FILMES
                </HeaderClickableTextContainer>
              </HeaderItemContainer>
              <HeaderItemContainer>
                <HeaderClickableTextContainer
                  href={"https://ingresso.com/cinemas"}
                  target={"_blank"}
                >
                  CINEMAS
                </HeaderClickableTextContainer>
              </HeaderItemContainer>
              <HeaderItemContainer>
                <HeaderClickableTextContainer
                  href={"https://ingresso.com/eventos"}
                  target={"_blank"}
                >
                  EVENTOS
                </HeaderClickableTextContainer>
              </HeaderItemContainer>
              <HeaderItemContainer>
                <HeaderClickableTextContainer
                  href={"https://rockinrio.ingresso.com"}
                  target={"_blank"}
                >
                  ROCK IN RIO
                </HeaderClickableTextContainer>
              </HeaderItemContainer>
            </HeaderAllItemsContainer>
          </VeticalAligner>
        </BottomHeader>
      </CentralizedContainer>
    </BottomHeaderContainer>
  );
}

export default BottomHeaderComponent;
