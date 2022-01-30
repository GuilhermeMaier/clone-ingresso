import React from "react";
import { FaSearch } from "react-icons/fa";
import { SeachIconContainer, SearchInputContainer } from "./searchInput.styles";

function SearchInputComponent() {
  return (
    <SearchInputContainer>
      <div style={{ position: "relative", width: "100%" }}>
        <input placeholder={"Pesquise por filmes, cinemas..."}></input>
      </div>
      <div style={{ position: "relative" }}>
        <SeachIconContainer>
          <FaSearch />
        </SeachIconContainer>
      </div>
    </SearchInputContainer>
  );
}

export default SearchInputComponent;
