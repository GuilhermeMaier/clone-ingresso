import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IUserCityIDBody } from "../common/cityModal";
import CentralizedContainer from "../common/common.styles";
import Loading from "../common/loading";
import VerticalMovie from "../common/verticalMovie";
import {
  ArrowContainer,
  MoviesCarrousel,
  MoviesCarrouselContainer,
  MoviesContainer,
  MoviesInnerCarrousel,
  MoviesSectionClickableText,
  MoviesSectionTitle,
  MoviesSectionTitleContainer,
} from "./movies.styles";

export interface ITrailer {
  type: string;
  url: string;
  embeddedUrl: string;
}

export interface IThumb {
  url: string;
  type: string;
}

export interface IMovie {
  id: string;
  title: string;
  city: string;
  siteURL: string;
  images: IThumb[];
  genres: string[];
  trailers: ITrailer[];
}

export interface IEvent {
  event: IMovie;
}

function Movies({ userCityID }: IUserCityIDBody) {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IEvent[]>([]);
  const [scrollX, setScrollX] = useState<number>(0);
  const [maxMarginRight, setMaxMarginRight] = useState<number>(0);

  async function fetchMovies() {
    try {
      setMovies((await axios.get("/api/movies")).data);
    } catch (error) {
      console.log(error);
    }
  }

  const onWindowResized = () => {
    if (movies.length) {
      const windowWidth = window.innerWidth;
      const isResponsive = windowWidth < 1100;
      const maxMargin = movies.length * 2 * 245;
      const widthExcedsMaxWidth = windowWidth * 0.8 > 1100;
      const sideMarginDiscount = widthExcedsMaxWidth
        ? windowWidth - 1100 - 5
        : windowWidth - windowWidth * 0.8 - 5;

      setMaxMarginRight(
        isResponsive == false
          ? windowWidth - maxMargin - sideMarginDiscount
          : windowWidth - maxMargin
      );
    }
  };

  function handleLeftArrowClick() {
    const isResponsive = window.innerWidth < 1100;
    const x = scrollX + (isResponsive == false ? window.innerWidth / 3 : 230);
    setScrollX(x > 0 ? (isResponsive ? 5 : 0) : x);
  }

  function handleRightArrowClick() {
    const isResponsive = window.innerWidth < 1100;
    const x =
      scrollX - Math.round(isResponsive == false ? window.innerWidth / 3 : 230);
    setScrollX(maxMarginRight > x ? maxMarginRight : x);
  }

  const allVerticalMovies = movies.map((currentMovie) => {
    return (
      <VerticalMovie key={currentMovie.event.id} event={currentMovie.event} />
    );
  });
  console.log(maxMarginRight);

  useEffect(() => {
    window.addEventListener("resize", onWindowResized);
    return () => window.removeEventListener("resize", onWindowResized);
  }, []);

  useEffect(() => {
    if (userCityID != 0) {
      setLoading(true);
      fetchMovies();
    }
  }, [userCityID]);

  useEffect(() => {
    if (movies.length) {
      setLoading(false);
      onWindowResized();
    }
  }, [movies]);

  return (
    <MoviesContainer style={{ height: 500 }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CentralizedContainer>
            <MoviesSectionTitleContainer>
              <MoviesSectionTitle>EM CARTAZ</MoviesSectionTitle>
              <MoviesSectionClickableText
                href={"https://ingresso.com/filmes"}
                target={"_blank"}
              >
                ver todos
              </MoviesSectionClickableText>
            </MoviesSectionTitleContainer>
          </CentralizedContainer>
          <MoviesCarrouselContainer>
            <ArrowContainer
              side={"left"}
              style={{ display: scrollX >= 0 ? "none" : "flex" }}
              onClick={handleLeftArrowClick}
            >
              <BsChevronLeft />
            </ArrowContainer>
            <MoviesCarrousel>
              <MoviesInnerCarrousel>
                <div
                  className="MarginHandler"
                  style={{ marginRight: scrollX }}
                ></div>
                {allVerticalMovies}
                {allVerticalMovies}
              </MoviesInnerCarrousel>
            </MoviesCarrousel>
            <ArrowContainer
              side={"right"}
              style={{
                display: scrollX == maxMarginRight ? "none" : "flex",
              }}
              onClick={handleRightArrowClick}
            >
              <BsChevronRight />
            </ArrowContainer>
          </MoviesCarrouselContainer>
        </>
      )}
    </MoviesContainer>
  );
}

export default Movies;
