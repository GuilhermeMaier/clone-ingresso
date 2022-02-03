import styled from "styled-components";

export const MainHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 9;
`;

export const TopHeaderContainer = styled.div`
  height: 60%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
`;

export const TopHeader = styled.div`
  display: flex;
  padding: 10px 0;
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

  @media (max-width: 1100px) {
    display: none;
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
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderClickableTextContainer = styled.a`
  color: white;
  font-size: 14px;
  padding-right: 5px;
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 0;
`;

export const HeaderTextContainer = styled.p`
  color: white;
  font-size: 14px;
  padding-right: 5px;
  cursor: pointer;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1260px) {
    display: none;
  }
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

export default MainHeader;
