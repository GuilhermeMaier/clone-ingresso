import axios from "axios";
import React, { useEffect, useState } from "react";
import GenreContainer, { Genre } from "../common/genre/genre.styles";
import Loading from "../common/loading";
import { Tag, TagsContainer } from "../common/tag/tag.styles";
import HeroContainer, { FeaturedTitle, ImageContainer } from "./hero.styles";

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

export interface ICityModal {
  userCityID: number;
}

function Hero({ userCityID }: ICityModal) {
  const [loading, setLoading] = useState<boolean>(true);
  const [feauredMovieData, setFeaturedMovieData] = useState<IEvent>();

  async function fetchHeroMovie() {
    try {
      setFeaturedMovieData((await axios.get("/api/featuredMovie")).data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchHeroMovie();
  }, []);

  useEffect(() => {
    if (userCityID != 0) {
      setLoading(true);
      fetchHeroMovie();
    }
  }, [userCityID]);

  return (
    <HeroContainer>
      {loading ? (
        <Loading />
      ) : (
        <ImageContainer
          href={feauredMovieData?.event.trailers[0].url}
          target={"_blank"}
          url={
            feauredMovieData
              ? feauredMovieData.event.images[1].url
              : "images/malevola.jpg"
          }
        >
          <div style={{ position: "absolute", bottom: 0 }}>
            <TagsContainer style={{ marginBottom: 5 }}>
              <Tag style={{ background: "#31d885" }}>Família</Tag>
              <Tag style={{ background: "#ee7f1d" }}>Em alta</Tag>
            </TagsContainer>
            <FeaturedTitle style={{ marginBottom: 5 }}>
              {feauredMovieData?.event.title}
            </FeaturedTitle>
            <GenreContainer style={{ marginBottom: 20 }}>
              <Genre>Gênero</Genre>
              <Genre>Gênero</Genre>
            </GenreContainer>
          </div>
        </ImageContainer>
      )}
    </HeroContainer>
  );
}

export default Hero;
