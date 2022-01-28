import React from "react";
import {
  BottomHeader,
  BottomHeaderContainer,
  HeaderAllItemsContainer,
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
                <HeaderTextContainer>FILMES</HeaderTextContainer>
              </HeaderItemContainer>
              <HeaderItemContainer>
                <HeaderTextContainer>CINEMAS</HeaderTextContainer>
              </HeaderItemContainer>
              <HeaderItemContainer>
                <HeaderTextContainer>EVENTOS</HeaderTextContainer>
              </HeaderItemContainer>
              <HeaderItemContainer>
                <HeaderTextContainer>ROCK IN RIO</HeaderTextContainer>
              </HeaderItemContainer>
            </HeaderAllItemsContainer>
          </VeticalAligner>
        </BottomHeader>
      </CentralizedContainer>
    </BottomHeaderContainer>
  );
}

export default BottomHeaderComponent;
