import styled from "styled-components";

export const MoviesContainer = styled.section`
  background: #333333;
  position: relative;
`;

export const MoviesSectionTitle = styled.h2`
  font-size: 15px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 15px;
  padding-top: 25px;
  color: white;
`;

export const MoviesCarrouselContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  max-width: inherit;
  width: inherit;
  position: relative;
`;

export const MoviesCarrousel = styled.div`
  display: flex;
  justify-content: start;
  overflow: hidden;
  position: relative;

  & * {
    transition: all 0.5s ease;
  }
`;

export const ArrowContainer = styled.div<{ side: "left" | "right" }>`
  cursor: pointer;
  position: absolute;
  width: 150px;
  height: 356px;
  z-index: 3;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.side == "left" ? "start" : "end")};
  font-size: 30px;
  color: #333333;
  transition: all 0.5s ease;
  background: linear-gradient(
    to left,
    rgba(33, 33, 33, 1) 0%,
    rgba(33, 33, 33, 0) 49%,
    rgba(33, 33, 33, 0) 100%
  );

  ${(props) =>
    props.side == "left"
      ? `
      left: 0;
      background: linear-gradient(
        to right,
        rgba(33, 33, 33, 1) 0%,
        rgba(33, 33, 33, 0) 80%,
        rgba(33, 33, 33, 0) 100%
      );
    `
      : `
      right: 0;
      background: linear-gradient(
        to left,
        rgba(33, 33, 33, 1) 0%,
        rgba(33, 33, 33, 0) 80%,
        rgba(33, 33, 33, 0) 100%
      );
    `};

  & :hover {
    color: #09f;
  }
`;

export default MoviesContainer;
