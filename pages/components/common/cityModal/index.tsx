import axios from "axios";
import React, { useEffect, useState } from "react";
import CentralizedContainer from "../common.styles";
import CustomSelectComponent, { IOption } from "../customSelect";
import CityModal, { LeftContainer, RightContainer } from "./cityModal.styles";

function CityModalComponent() {
  const [currentState, setCurrentState] = useState("");
  const [cities, setCities] = useState([{ name: "", value: 0 }]);

  async function fetchCities() {
    try {
      setCities(
        (await axios.get("/api/cities", { params: { stateID: 1 } })).data
      );
      // setFeaturedMovieData((await axios.get("/api/featuredMovie")).data);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    currentState != "" && fetchCities();
  }, [currentState]);

  const states: IOption[] = [
    { name: "São Paulo", value: 1 },
    { name: "Rio de Janeiro", value: 2 },
  ];

  return (
    <CentralizedContainer style={{ position: "relative" }}>
      <CityModal>
        <LeftContainer>
          <CustomSelectComponent options={states} />
          <CustomSelectComponent options={cities} />
        </LeftContainer>
        <RightContainer>LorenIpsum</RightContainer>
      </CityModal>
    </CentralizedContainer>
  );
}

export default CityModalComponent;
