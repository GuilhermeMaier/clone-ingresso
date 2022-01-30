import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import CentralizedContainer from "../common/common.styles";
import Loading from "../common/loading";
import VerticalMovie from "../common/verticalMovie";
import {
  ArrowContainer,
  MoviesCarrousel,
  MoviesCarrouselContainer,
  MoviesContainer,
  MoviesSectionTitle,
} from "./movies.styles";

interface ITrailer {
  type: string;
  url: string;
  embeddedUrl: string;
}

interface IThumb {
  url: string;
  type: string;
}

interface IMovie {
  id: string;
  title: string;
  city: string;
  siteURL: string;
  images: IThumb[];
  genres: string[];
  trailers: ITrailer[];
}

interface IEvent {
  event: IMovie;
}

function Movies() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IEvent[]>([]);
  const [scrollX, setScrollX] = useState<number>(0);

  async function fetchMovies() {
    try {
      setMovies((await axios.get("/api/movies")).data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    movies && setLoading(false);
  }, [movies]);

  useEffect(() => {
    if (movies.length) {
      const featuredMovie = Math.floor(Math.random() * movies.length);
      setLoading(false);
    }
  }, [movies]);

  function handleLeftArrowClick() {
    const x = scrollX + 300;
    setScrollX(x > 0 ? 0 : x);
  }

  function handleRightArrowClick() {
    const x = scrollX - 300;
    setScrollX(x < -1340 ? -1340 : x);
  }

  const allVerticalMovies = movies.map((currentMovie) => {
    return (
      <VerticalMovie key={currentMovie.event.id} event={currentMovie.event} />
    );
  });

  return (
    <MoviesContainer style={{ height: 500 }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CentralizedContainer>
            <MoviesSectionTitle>EM CARTAZ</MoviesSectionTitle>
            <MoviesCarrouselContainer>
              <MoviesCarrousel style={{ width: movies.length * 2 * 240 }}>
                <ArrowContainer
                  side={"left"}
                  style={{ display: scrollX == 0 ? "none" : "flex" }}
                  onClick={handleLeftArrowClick}
                >
                  <BsChevronLeft />
                </ArrowContainer>
                <div
                  className="MarginHandler"
                  style={{ marginRight: scrollX }}
                ></div>
                {allVerticalMovies}
                {allVerticalMovies}
                <ArrowContainer
                  side={"right"}
                  style={{
                    display: scrollX == -1340 ? "none" : "flex",
                  }}
                  onClick={handleRightArrowClick}
                >
                  <BsChevronRight />
                </ArrowContainer>
              </MoviesCarrousel>
            </MoviesCarrouselContainer>
          </CentralizedContainer>
        </>
      )}
    </MoviesContainer>
  );
}

export default Movies;
