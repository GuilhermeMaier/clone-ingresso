import styled from "styled-components";

export const VerticalMovieContainer = styled.div`
  background: #212121;
  min-height: 356px;
  height: 356px;
  max-height: 356px;
  min-width: 240px;
  width: 240px;
  max-width: 240px;
  overflow: hidden;
  position: relative;
  margin-right: 5px;

  & :last-child {
    margin-right: 0;
  }
`;

export const ImageContainer = styled.div<{ url: string }>`
  position: relative;
  display: table;
  margin: 0 auto;
  padding: 15px;
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url(${(props) => props.url});
  background-size: 240px 356px;
  text-shadow: black 0px 0px 2px;
  background-position-x: center;
  background-position-y: center;
  transition: all 0.5s ease;

  & :hover {
    transform: scale(1.2);
  }
`;

export const VerticalMovieDataContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 15px 15px 15px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.85) 100%
  );
`;

export const MovieTitleContainer = styled.div``;

export const MovieTitle = styled.h1`
  padding-right: 15%;
  padding-top: 5px;
  color: white;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
`;

export default VerticalMovieContainer;
