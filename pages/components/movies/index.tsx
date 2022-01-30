import axios from "axios";
import React, { useEffect, useState } from "react";
import CentralizedContainer from "../common/common.styles";
import Loading from "../common/loading";
import VerticalMovie from "../common/verticalMovie";
import {
  MoviesCarrousel,
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
        <CentralizedContainer>
          <MoviesSectionTitle>EM CARTAZ</MoviesSectionTitle>
          <MoviesCarrousel>
            {allVerticalMovies}
            {allVerticalMovies}
          </MoviesCarrousel>
        </CentralizedContainer>
      )}
    </MoviesContainer>
  );
}

export default Movies;
