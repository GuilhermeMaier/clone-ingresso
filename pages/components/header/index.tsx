import React, { useState } from "react";
import Image from "next/image";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineShoppingBag } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { BsExclamationCircleFill } from "react-icons/bs";
import {
  BottomHeader,
  HeaderAllItemsContainer,
  HeaderExclamationCircle,
  HeaderIconContainer,
  HeaderItemContainer,
  HeaderLogoContainer,
  HeaderTextContainer,
  MainHeader,
  TopHeader,
} from "./header.styles";
import { VeticalAligner } from "../common/common.styles";

function Header() {
  const [userCity, setUserCity] = useState("Selecione uma Cidade");
  return (
    <MainHeader>
      <TopHeader>
        <HeaderLogoContainer>
          <Image src={"/images/logo.png"} height={40} width={256.67} />
        </HeaderLogoContainer>
        <VeticalAligner>
          <HeaderAllItemsContainer>
            <HeaderItemContainer>
              <HeaderIconContainer>
                <FaSearch />
              </HeaderIconContainer>
              <HeaderTextContainer>Busca</HeaderTextContainer>
            </HeaderItemContainer>
            <HeaderItemContainer>
              <HeaderIconContainer>
                <HiOutlineLocationMarker
                  style={{ fontSize: 17, position: "relative", top: -1 }}
                />
              </HeaderIconContainer>
              <HeaderTextContainer>{userCity}</HeaderTextContainer>
            </HeaderItemContainer>
            <HeaderItemContainer>
              <HeaderIconContainer>
                <FaRegUser />
              </HeaderIconContainer>
              <HeaderTextContainer>Olá, Avaliador</HeaderTextContainer>
            </HeaderItemContainer>
            <HeaderItemContainer>
              <HeaderIconContainer>
                <BiHelpCircle
                  style={{ fontSize: 17, position: "relative", top: -1 }}
                />
              </HeaderIconContainer>
              <HeaderTextContainer>Atendimento</HeaderTextContainer>
            </HeaderItemContainer>
          </HeaderAllItemsContainer>
        </VeticalAligner>
      </TopHeader>
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
              <HeaderTextContainer>NOTÍCIAS</HeaderTextContainer>
            </HeaderItemContainer>
            <HeaderItemContainer>
              <HeaderTextContainer>PREVENÇÕES</HeaderTextContainer>
            </HeaderItemContainer>
            <HeaderItemContainer>
              <HeaderIconContainer style={{ position: "relative", width: 20 }}>
                <HeaderExclamationCircle>
                  <BsExclamationCircleFill />
                </HeaderExclamationCircle>
                <HiOutlineShoppingBag
                  style={{
                    position: "absolute",
                    fontSize: 20,
                    top: -4,
                    transform: "rotateZ(-20deg)",
                  }}
                />
              </HeaderIconContainer>
              <HeaderTextContainer>FANSHOP</HeaderTextContainer>
            </HeaderItemContainer>
            <HeaderItemContainer>
              <HeaderTextContainer>ROCK IN RIO</HeaderTextContainer>
            </HeaderItemContainer>
          </HeaderAllItemsContainer>
        </VeticalAligner>
      </BottomHeader>
    </MainHeader>
  );
}

export default Header;
