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
import CityModalComponent from "../common/cityModal";

export interface ICityModal {
  handleChangeUpperUserCityID: (changedUpperCityID: number) => void;
}

function TopHeaderComponent({ handleChangeUpperUserCityID }: ICityModal) {
  const [cityModalVisibility, setCityModalVisibility] =
    useState<boolean>(false);
  const [userCity, setUserCity] = useState<string>("Selecione uma cidade");
  const [userCityID, setUserCityID] = useState<number>(0);
  const [greatLogo, setGreatLogo] = useState(true);

  useEffect(() => {
    const scrollListener = () => setGreatLogo(window.scrollY <= 60);
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const changeUserCity = (changedCity: string) => {
    setUserCity(changedCity);
  };

  const changeUserCityID = (changedCityID: number) => {
    setUserCityID(changedCityID);
    handleChangeUpperUserCityID(changedCityID);
  };

  return (
    <>
      <TopHeaderContainer style={{ height: greatLogo ? 60 : 54 }}>
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
                  alt="ingresso.com"
                />
              </HeaderClickableTextContainer>
            </HeaderLogoContainer>
            <VeticalAligner>
              <HeaderAllItemsContainer>
                <HeaderItemContainer>
                  <SearchInputComponent />
                </HeaderItemContainer>
                <HeaderItemContainer
                  onClick={() => setCityModalVisibility(!cityModalVisibility)}
                >
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
      {cityModalVisibility && (
        <CityModalComponent
          userCity={userCity}
          userCityID={userCityID}
          handleChangeUserCity={changeUserCity}
          handleChangeUserCityID={changeUserCityID}
        />
      )}
    </>
  );
}

export default TopHeaderComponent;
