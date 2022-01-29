import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #212121;
`;

export const ImageContainer = styled.div<{ url: string }>`
  position: relative;
  display: table;
  margin: 0 auto;
  height: 500px;
  width: 1100px;
  background-image: linear-gradient(
      to top,
      rgba(33, 33, 33, 1) 0%,
      rgba(33, 33, 33, 0) 15%,
      rgba(33, 33, 33, 0) 100%
    ),
    linear-gradient(
      to left,
      rgba(33, 33, 33, 1) 0%,
      rgba(33, 33, 33, 0) 49%,
      rgba(33, 33, 33, 0) 100%
    ),
    linear-gradient(
      to right,
      rgba(33, 33, 33, 1) 0%,
      rgba(33, 33, 33, 0) 49%,
      rgba(33, 33, 33, 0) 100%
    ),
    url(${(props) => props.url});
`;

export const FeaturedTitle = styled.div`
  color: white;
  font-size: 22px;
  font-weight: bold;
`;

export default HeroContainer;
