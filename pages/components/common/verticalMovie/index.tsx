import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import TagsContainer, { Tag } from "../tag/tag.styles";
import VerticalMovieContainer, {
  ImageContainer,
  MovieTitle,
  MovieTitleContainer,
  VerticalMovieDataContainer,
} from "./verticalMovie.styles";

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

function VerticalMovie() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IEvent[]>([]);
  const [featuredMovie, setFeaturedMovie] = useState<IEvent>();
  const [featuredMovieUrl, setFeaturedMovieUrl] = useState<string>("");

  async function fetchHeroMovie() {
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
    fetchHeroMovie();
  }, []);

  useEffect(() => {
    if (movies.length) {
      const featuredMovie = Math.floor(Math.random() * movies.length);
      const currentFeaturedData = movies[featuredMovie];
      const currentURL = currentFeaturedData
        ? currentFeaturedData.event.images[0].url
        : "/images/malevola.jpg";
      setFeaturedMovie(currentFeaturedData);
      setFeaturedMovieUrl(currentURL);
      setLoading(false);
    }
  }, [movies]);
  console.log(featuredMovie);
  return (
    <VerticalMovieContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ImageContainer url={featuredMovieUrl} />
          <VerticalMovieDataContainer>
            <MovieTitleContainer>
              <TagsContainer>
                <Tag style={{ background: "#31d885" }}>Tag</Tag>
                <Tag style={{ background: "#ee7f1d" }}>Tag</Tag>
              </TagsContainer>
              <MovieTitle>{featuredMovie?.event.title}</MovieTitle>
            </MovieTitleContainer>
          </VerticalMovieDataContainer>
        </>
      )}
    </VerticalMovieContainer>
  );
}

export default VerticalMovie;
