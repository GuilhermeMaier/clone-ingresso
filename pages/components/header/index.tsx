import React, { useState } from "react";
import Image from "next/image";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineShoppingBag } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { BsExclamationCircleFill } from "react-icons/bs";
import {
  BottomHeader,
  BottomHeaderContainer,
  HeaderAllItemsContainer,
  HeaderExclamationCircle,
  HeaderIconContainer,
  HeaderItemContainer,
  HeaderLogoContainer,
  HeaderTextContainer,
  MainHeader,
  TopHeader,
  TopHeaderContainer,
} from "./header.styles";
import { CentralizedContainer, VeticalAligner } from "../common/common.styles";

function Header() {
  const [userCity, setUserCity] = useState("Selecione uma Cidade");
  return (
    <MainHeader>
      <TopHeaderContainer>
        <CentralizedContainer>
          <TopHeader>
            <HeaderLogoContainer>
              <Image src={"/images/logo.png"} height={40} width={256.67} />
            </HeaderLogoContainer>
            <VeticalAligner>
              <HeaderAllItemsContainer>
                <HeaderItemContainer>
                  <HeaderTextContainer>Busca</HeaderTextContainer>
                  <HeaderIconContainer>
                    <FaSearch />
                  </HeaderIconContainer>
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
    </MainHeader>
  );
}

export default Header;
