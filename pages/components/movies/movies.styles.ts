import styled from "styled-components";

export const MoviesContainer = styled.div`
  background: #333333;
`;

export const ImageContainer = styled.div<{ url: string }>`
  position: relative;
  display: table;
  margin: 0 auto;
  height: 500px;
  width: 1100px;
  background-image: linear-gradient(
      to top,
      rgba(51, 51, 51, 1) 0%,
      rgba(51, 51, 51, 0) 15%,
      rgba(51, 51, 51, 0) 100%
    ),
    linear-gradient(
      to left,
      rgba(51, 51, 51, 1) 0%,
      rgba(51, 51, 51, 0) 49%,
      rgba(51, 51, 51, 0) 100%
    ),
    linear-gradient(
      to right,
      rgba(51, 51, 51, 1) 0%,
      rgba(51, 51, 51, 0) 49%,
      rgba(51, 51, 51, 0) 100%
    ),
    url(${(props) => props.url});
`;

export const FeaturedTitle = styled.div`
  color: white;
  font-size: 22px;
  font-weight: bold;
`;

export default MoviesContainer;
