import styled from "styled-components";

export const SearchInputContainer = styled.div`
  width: 250px;
  display: flex;

  & input {
    position: absolute;
    height: 30px;
    padding: 0 26px 0 15px;
    top: -8px;
    width: 100%;
    outline: none;
    background: white;
    border-radius: 3px;
    border: 0;
  }
`;

export const SeachIconContainer = styled.div`
  color: #09f;
  position: absolute;
  right: 5px;
`;

export default SearchInputContainer;
