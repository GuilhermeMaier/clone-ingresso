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
import { ICityChangeBody } from ".";

function TopHeaderComponent({ handleChangeUpperUserCityID }: ICityChangeBody) {
  const [cityModalVisibility, setCityModalVisibility] =
    useState<boolean>(false);
  const [userCity, setUserCity] = useState<string>("Selecione uma cidade");
  const [userCityID, setUserCityID] = useState<number>(0);
  const [greatLogo, setGreatLogo] = useState(true);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const scrollListener = () => setGreatLogo(window.scrollY <= 60);
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  useEffect(() => {
    onWindowResized();
    window.addEventListener("resize", onWindowResized);
    return () => window.removeEventListener("resize", onWindowResized);
  }, []);

  const onWindowResized = () => {
    setIsResponsive(window.innerWidth < 1100);
  };

  const changeUserCity = (changedCity: string) => {
    setUserCity(changedCity);
  };

  const changeUserCityID = (changedCityID: number) => {
    setUserCityID(changedCityID);
    handleChangeUpperUserCityID(changedCityID);
  };

  return (
    <>
      <TopHeaderContainer
        style={{ height: isResponsive ? "unset" : greatLogo ? 60 : 54 }}
      >
        <CentralizedContainer>
          <TopHeader>
            <HeaderLogoContainer>
              <HeaderClickableTextContainer
                href={"https://ingresso.com/home"}
                target={"_blank"}
              >
                {isResponsive == false ? (
                  <Image
                    src={"/images/logo.png"}
                    height={greatLogo ? 40 : 30}
                    width={greatLogo ? 256.67 : 192.5}
                    alt="ingresso.com"
                  />
                ) : (
                  <Image
                    src={"/images/logo-responsive.svg"}
                    height={42}
                    width={32}
                    alt="ingresso.com"
                  />
                )}
              </HeaderClickableTextContainer>
            </HeaderLogoContainer>
            <VeticalAligner>
              <HeaderAllItemsContainer>
                <HeaderItemContainer>
                  {isResponsive == false && <SearchInputComponent />}
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
