import styled from "styled-components";

export const CentralizedContainer = styled.div`
  width: 80vw;
  max-width: 1100px;
  display: table;
  margin: 0 auto;

  @media (max-width: 1100px) {
    width: 100vw;
    max-width: 100%;
    padding: 0 15px;
  }
`;

export const VeticalAligner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CentralizedContainer;
