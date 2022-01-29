import styled from "styled-components";

export const LoadingContainer = styled.div`
  background: #212121;
  opacity: 0.4;
  position: absolute;
  left: 0;
  right: 0;
  height: inherit;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
`;

export const LoadingIconContainer = styled.div`
  height: fit-content;
  display: table;
  margin: 0 auto;
  animation: spin 2s infinite linear;

  & svg {
    color: white;
    font-size: 100px;
    z-index: 3;
  }
`;

export default LoadingContainer;
