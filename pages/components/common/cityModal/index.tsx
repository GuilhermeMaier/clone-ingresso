import React from "react";
import CityModal, { LeftContainer, RightContainer } from "./cityModal.styles";

interface ICityModal {
  topPosition: number;
}

function CityModalComponent({ topPosition }: ICityModal) {
  return (
    <CityModal style={{ top: topPosition }}>
      <LeftContainer>Fonfon</LeftContainer>
      <RightContainer>TonOn</RightContainer>
    </CityModal>
  );
}

export default CityModalComponent;
