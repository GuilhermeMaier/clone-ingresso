import styled from "styled-components";

export const MainHeader = styled.div`
  height: 100px;
  width: 100%;
`;

export const TopHeaderContainer = styled.div`
  height: 60%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

export const TopHeader = styled.div`
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
`;

export const BottomHeaderContainer = styled.div`
  height: 40%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
`;

export const BottomHeader = styled.div`
  display: flex;
  padding: 10px 15px;
  justify-content: end;

  & * {
    color: #09f !important;
    font-weight: bold;
  }
`;

export const HeaderLogoContainer = styled.div``;

export const HeaderAllItemsContainer = styled.div`
  display: flex;
`;

export const HeaderItemContainer = styled.div`
  display: flex;
  padding-left: 30px;
`;

export const HeaderIconContainer = styled.span`
  color: #09f;
`;

export const HeaderTextContainer = styled.span`
  color: white;
  font-size: 14px;
  padding-right: 5px;
`;

export const HeaderExclamationCircle = styled.span`
  position: absolute;
  top: -6px;
  right: -4px;
  z-index: 1;
  font-size: 14px;

  & * {
    color: #f90 !important;
  }
`;
