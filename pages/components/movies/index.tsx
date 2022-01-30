import axios from "axios";
import React, { useEffect, useState } from "react";
import GenreContainer, { Genre } from "../common/genre/genre.styles";
import Loading from "../common/loading";
import { Tag, TagsContainer } from "../common/tag/tag.styles";
import VerticalMovie from "../common/verticalMovie";
import HeroContainer, {
  FeaturedTitle,
  ImageContainer,
  MoviesContainer,
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
  const [featuredMovie, setFeaturedMovie] = useState<IEvent>();
  const [featuredMovieUrl, setFeaturedMovieUrl] = useState<string>("");

  async function fetchMovies() {
    try {
      // const result = await axios.get(
      //   "https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home"
      // );
      const result = (await axios.get("/api/movies")).data;
      setMovies(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length) {
      const featuredMovie = Math.floor(Math.random() * movies.length);
      const currentFeaturedData = movies[featuredMovie];
      const currentURL = currentFeaturedData
        ? currentFeaturedData.event.images[1].url
        : "/images/malevola.jpg";
      setFeaturedMovie(currentFeaturedData);
      setFeaturedMovieUrl(currentURL);
      setLoading(false);
    }
  }, [movies]);
  console.log(featuredMovie);
  return (
    <MoviesContainer style={{ height: 500 }}>
      {loading ? <Loading /> : <VerticalMovie />}
    </MoviesContainer>
  );
}

export default Movies;
