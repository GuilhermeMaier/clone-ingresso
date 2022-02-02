import styled from "styled-components";

export const MoviesContainer = styled.section`
  background: #333333;
  position: relative;
  overflow: hidden;
`;

export const MoviesSectionTitleContainer = styled.div`
  padding-bottom: 15px;
  padding-top: 30px;
  display: flex;
`;

export const MoviesSectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  color: white;
`;

export const MoviesSectionClickableText = styled.a`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 40px;
  font-size: 12px;
  color: #09f;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MoviesCarrouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: inherit;
  position: relative;
  overflow: hidden;
`;

export const MoviesCarrousel = styled.div`
  display: block;
  position: relative;
  overflow: visible;
  max-width: 1100px;

  & * {
    transition: all 0.5s ease;
  }

  @media (max-width: 1100px) {
    width: 100vw;
    max-width: 100%;
  }
`;

export const MoviesInnerCarrousel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ArrowContainer = styled.div<{ side: "left" | "right" }>`
  cursor: pointer;
  position: absolute;
  width: 150px;
  height: 356px;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.side == "left" ? "start" : "end")};
  font-size: 30px;
  color: #333333;
  transition: all 0.5s ease;

  ${(props) =>
    props.side == "left"
      ? `
      left: 0;
      background: linear-gradient(
        to right,
        rgba(51, 51, 51, 1) 0%,
        rgba(51, 51, 51, 0) 80%,
        rgba(51, 51, 51, 0) 100%
      );
    `
      : `
      right: 0;
      background: linear-gradient(
        to left,
        rgba(51, 51, 51, 1) 0%,
        rgba(51, 51, 51, 0) 80%,
        rgba(51, 51, 51, 0) 100%
      );
    `};

  & :hover {
    color: #09f;
  }
`;

export default MoviesContainer;
