import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import {
  HeaderAllItemsContainer,
  HeaderClickableTextContainer,
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
  const [greatLogo, setGreatLogo] = useState(true);

  useEffect(() => {
    const scrollListener = () => setGreatLogo(window.scrollY <= 60);
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  return (
    <TopHeaderContainer>
      <CentralizedContainer>
        <TopHeader>
          <HeaderLogoContainer>
            <HeaderClickableTextContainer
              href={"https://ingresso.com/home"}
              target={"_blank"}
            >
              <Image
                src={"/images/logo.png"}
                height={greatLogo ? 40 : 30}
                width={greatLogo ? 256.67 : 192.5}
              />
            </HeaderClickableTextContainer>
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
              <HeaderClickableTextContainer
                href={"https://atendimento.ingresso.com/hc/pt-br"}
                target={"_blank"}
              >
                <HeaderItemContainer>
                  <HeaderTextContainer>Atendimento</HeaderTextContainer>
                  <HeaderIconContainer>
                    <BiHelpCircle
                      style={{ fontSize: 17, position: "relative", top: -1 }}
                    />
                  </HeaderIconContainer>
                </HeaderItemContainer>
              </HeaderClickableTextContainer>
            </HeaderAllItemsContainer>
          </VeticalAligner>
        </TopHeader>
      </CentralizedContainer>
    </TopHeaderContainer>
  );
}

export default TopHeaderComponent;
