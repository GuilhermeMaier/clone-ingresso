import styled from "styled-components";

export const CityModal = styled.div`
  background: #212121;
  height: 50vh;
  width: 50vw;
  right: 0;
  display: flex;
  position: absolute;
  padding: 25px 40px;
  color: white;
`;

export const LeftContainer = styled.div`
  width: 60%;
`;

export const RightContainer = styled.div`
  width: 40%;
  border-left: 1px solid #666;
`;

export default CityModal;
