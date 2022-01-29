import axios from "axios";
import React, { useEffect, useState } from "react";
import handler from "../../api/movies";
import Loading from "../common/loading";
import HeroContainer, { ImageContainer } from "./hero.styles";

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

function Hero() {
  const [loading, setLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<IEvent[]>([]);
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
        ? currentFeaturedData.event.images[1].url
        : "/images/malevola.jpg";
      setFeaturedMovieUrl(currentURL);
      setLoading(false);
      console.log("featured", movies);
      console.log("featured", loading);
      console.log("featured", featuredMovie);
    }
  }, [movies]);

  // useEffect(() => {
  //   if (movies.length) {
  //     const currentFeaturedData = movies[featuredMovie];
  //     const currentURL = currentFeaturedData
  //       ? currentFeaturedData.event.images[1].url
  //       : "/images/malevola.jpg";
  //     setFeaturedMovieUrl(currentURL);
  //     setLoading(false);
  //   }
  // }, [featuredMovie]);

  return (
    <HeroContainer style={{ height: 500 }}>
      {loading ? (
        <Loading />
      ) : (
        <ImageContainer url={featuredMovieUrl}></ImageContainer>
      )}
    </HeroContainer>
  );
}

export default Hero;
