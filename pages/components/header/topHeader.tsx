import React, { useState } from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import {
  HeaderAllItemsContainer,
  HeaderIconContainer,
  HeaderItemContainer,
  HeaderLogoContainer,
  HeaderTextContainer,
  TopHeader,
  TopHeaderContainer,
} from "./header.styles";
import { CentralizedContainer, VeticalAligner } from "../common/common.styles";
import SearchInputComponent from "../common/searchInput";

function TopHeaderComponent() {
  const [userCity, setUserCity] = useState("Selecione uma Cidade");
  return (
    <TopHeaderContainer>
      <CentralizedContainer>
        <TopHeader>
          <HeaderLogoContainer>
            <Image src={"/images/logo.png"} height={40} width={256.67} />
          </HeaderLogoContainer>
          <VeticalAligner>
            <HeaderAllItemsContainer>
              <HeaderItemContainer>
                <SearchInputComponent />
              </HeaderItemContainer>
              <HeaderItemContainer>
                <HeaderTextContainer>{userCity}</HeaderTextContainer>
                <HeaderIconContainer>
                  <HiOutlineLocationMarker
                    style={{ fontSize: 17, position: "relative", top: -1 }}
                  />
                </HeaderIconContainer>
              </HeaderItemContainer>
              <HeaderItemContainer>
                <HeaderTextContainer>Olá, Avaliador</HeaderTextContainer>
                <HeaderIconContainer>
                  <FaRegUser />
                </HeaderIconContainer>
              </HeaderItemContainer>
              <HeaderItemContainer>
                <HeaderTextContainer>Atendimento</HeaderTextContainer>
                <HeaderIconContainer>
                  <BiHelpCircle
                    style={{ fontSize: 17, position: "relative", top: -1 }}
                  />
                </HeaderIconContainer>
              </HeaderItemContainer>
            </HeaderAllItemsContainer>
          </VeticalAligner>
        </TopHeader>
      </CentralizedContainer>
    </TopHeaderContainer>
  );
}

export default TopHeaderComponent;
