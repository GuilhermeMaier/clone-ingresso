import styled from "styled-components";

export const MainFooter = styled.footer`
  width: 100%;
  background: #212121;
`;

export const TopFooterContainer = styled.div`
  width: 100%;
`;

export const TopFooter = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
`;

export const BottomFooterContainer = styled.div`
  width: 100%;
`;

export const BottomFooter = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
`;

export const FooterAllItemsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    margin-right: 15px;
  }
`;

export const FooterImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FooterIconContainer = styled.span`
  color: white;
  width: 45px;
  height: 45px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  cursor: pointer;
`;

export const FooterTextContainer = styled.h1`
  color: white;
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const FooterTextClickableContainer = styled.a`
  color: #09f;
  font-size: 14px;
  padding: 5px 0;
  cursor: pointer;
`;

export const FooterHelpContainer = styled.a`
  border: 1px solid #09f;
  border-radius: 3px;
  background: transparent;
  color: #09f;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
`;

export default MainFooter;
