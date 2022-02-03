import styled from "styled-components";

export const HeroContainer = styled.section`
  background: #212121;
  height: 500px;

  @media (max-width: 1100px) {
    height: 300px;
  }
`;

export const MovieRedirector = styled.a`
  cursor: pointer;
`;

export const ImageContainer = styled.a<{ url: string }>`
  position: relative;
  display: table;
  margin: 0 auto;
  height: 500px;
  width: 80vw;
  max-width: 1100px;
  background-size: cover;
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

  @media (max-width: 1100px) {
    width: 100vw;
    max-width: 100%;
    height: 300px;
    background-position: top;

    & > div {
      padding: 0 15px;
    }
  }
`;

export const FeaturedTitle = styled.h2`
  color: white;
  font-weight: bold;
  margin-top: 0;

  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;

export default HeroContainer;
