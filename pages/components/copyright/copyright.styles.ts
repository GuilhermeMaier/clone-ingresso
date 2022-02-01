import styled from "styled-components";

export const Copyright = styled.div`
  width: 100%;
  background: #212121;
  padding-top: 50px;
  padding-bottom: 25px;
`;

export const CopyrightDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CopyrightTextContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const CopyrightText = styled.span`
  color: #979797;
  font-size: 12px;
  padding-right: 5px;
`;

export const CopyrightClickableText = styled.a`
  color: #09f;
  font-size: 12px;
  padding-right: 5px;
  cursor: pointer;
`;

export default Copyright;
