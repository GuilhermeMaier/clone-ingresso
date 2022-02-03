import styled from "styled-components";

export const CustomSelectContainer = styled.div`
  width: inherit;
  display: flex;
  border-radius: 3px;

  & select {
    height: 30px;
    padding: 0 26px 0 15px;
    top: -5px;
    width: 100%;
    outline: none;
    background: white;
    border-radius: 3px;
    border: 0;
    border-left: 3px solid #999;
    appearance: none;

    & :focus {
      border: 1px solid #09f;
      border-left: 3px solid #09f;
      border-radius: 3px;
    }
  }
`;

export const CustomSelectIconContainer = styled.div`
  color: #09f;
  position: absolute;
  right: 5px;
  top: 9px;
  font-size: 12px;
`;

export default CustomSelectContainer;
