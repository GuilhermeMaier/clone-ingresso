import styled from "styled-components";

export const VerticalMovieContainer = styled.div`
  background: #212121;
  height: 356px;
  width: 240px;
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
  background-image: linear-gradient(
      to top,
      rgba(51, 51, 51, 1) 0%,
      rgba(51, 51, 51, 0) 15%,
      rgba(51, 51, 51, 0) 100%
    ),
    url(${(props) => props.url});
  background-size: 240px 356px;
  text-shadow: black 0px 0px 2px;
  background-position-x: center;
  background-position-y: center;

  & :hover {
    background-size: auto 105%;
  }
`;

export const VerticalMovieDataContainer = styled.div``;

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
