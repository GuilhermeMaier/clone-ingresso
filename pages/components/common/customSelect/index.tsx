import React from "react";
import { FaChevronDown } from "react-icons/fa";
import CustomSelectContainer, {
  CustomSelectIconContainer,
} from "./customSelect.styles";

export interface ICustomBody {
  options: IOption[];
}

export interface IOption {
  name: string;
  value: number;
}

function CustomSelectComponent({ options }: ICustomBody) {
  const selectOptions = options?.map((currentOption) => {
    return (
      <option key={currentOption.value} value={currentOption.value}>
        {currentOption.name}
      </option>
    );
  });

  return (
    <CustomSelectContainer>
      <div style={{ position: "relative", width: "100%" }}>
        <select>
          <option value={0}>Selecione</option>
          {selectOptions}
        </select>
      </div>
    </CustomSelectContainer>
  );
}

export default CustomSelectComponent;
