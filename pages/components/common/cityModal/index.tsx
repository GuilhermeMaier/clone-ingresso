import axios from "axios";
import React, { useEffect, useState } from "react";
import CentralizedContainer from "../common.styles";
import CustomSelectContainer from "../customSelect/customSelect.styles";
import CityModal, { LeftContainer, RightContainer } from "./cityModal.styles";

export interface ICustomBody {
  options: IOption[];
}

export interface IOption {
  name: string;
  value: number;
}

function CityModalComponent({
  userCity,
  userCityID,
  handleChangeUserCity,
  handleChangeUserCityID,
}: {
  userCity: string;
  userCityID: number;
  handleChangeUserCity: (changedCity: string) => void;
  handleChangeUserCityID: (changedCityID: number) => void;
}) {
  const [currentState, setCurrentState] = useState({ name: "", value: 0 });
  const [currentCity, setCurrentCity] = useState({
    name: userCity,
    value: userCityID,
  });
  const [cities, setCities] = useState([{ name: "", value: 0 }]);
  const [citiesSelectDisabled, setCitiesSelectDisabled] = useState(true);

  async function fetchCities() {
    try {
      setCities(
        (
          await axios.get("/api/cities", {
            params: { stateID: currentState.value },
          })
        ).data
      );
      setCitiesSelectDisabled(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    currentState.name != "" && currentState.value != 0
      ? fetchCities()
      : setCitiesSelectDisabled(true);
  }, [currentState]);

  useEffect(() => {
    handleChangeUserCity(
      currentCity.name != "" ? currentCity.name : "Selecione uma Cidade"
    );
    handleChangeUserCityID(currentCity.value);
  }, [currentCity]);

  const states: IOption[] = [
    { name: "São Paulo", value: 1 },
    { name: "Rio de Janeiro", value: 2 },
  ];

  const selectStateOptions = states?.map((currentOption) => {
    return (
      <option key={currentOption.value} value={currentOption.value}>
        {currentOption.name}
      </option>
    );
  });

  const selectCityOptions = cities?.map((currentOption) => {
    return (
      <option key={currentOption.value} value={currentOption.value}>
        {currentOption.name}
      </option>
    );
  });

  return (
    <CentralizedContainer style={{ position: "relative" }}>
      <CityModal>
        <LeftContainer>
          <CustomSelectContainer>
            <div style={{ position: "relative", width: "100%" }}>
              <select
                onChange={(event) => {
                  const currentID = Number(event.target.value);

                  if (currentID != 0) {
                    const currentStateName = states.filter(
                      (actualState) => actualState.value == currentID
                    )[0].name;
                    setCurrentState({
                      value: currentID,
                      name: currentStateName,
                    });
                  } else {
                    setCitiesSelectDisabled(true);
                    setCurrentState({ name: "", value: 0 });
                  }
                }}
              >
                <option value={0}>Selecione</option>
                {selectStateOptions}
              </select>
            </div>
          </CustomSelectContainer>
          <CustomSelectContainer>
            <div style={{ position: "relative", width: "100%" }}>
              <select
                disabled={citiesSelectDisabled}
                onChange={(event) => {
                  const currentID = Number(event.target.value);

                  if (currentID != 0) {
                    const currentCityName = states.filter(
                      (actualCity) => actualCity.value == currentID
                    )[0].name;
                    setCurrentCity({
                      value: currentID,
                      name: currentCityName,
                    });
                  }
                }}
              >
                <option value={0}>Selecione</option>
                {selectCityOptions}
              </select>
            </div>
          </CustomSelectContainer>
          {/* <CustomSelectComponent options={states} />
          <CustomSelectComponent options={cities} /> */}
        </LeftContainer>
        <RightContainer>LorenIpsum</RightContainer>
      </CityModal>
    </CentralizedContainer>
  );
}

export default CityModalComponent;
