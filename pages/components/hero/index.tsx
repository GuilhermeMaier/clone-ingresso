import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUserCityIDBody } from "../common/cityModal";
import GenreContainer, { Genre } from "../common/genre/genre.styles";
import Loading from "../common/loading";
import { Tag, TagsContainer } from "../common/tag/tag.styles";
import { IEvent } from "../movies";
import HeroContainer, { FeaturedTitle, ImageContainer } from "./hero.styles";

function Hero({ userCityID }: IUserCityIDBody) {
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
    if (userCityID != 0) {
      setLoading(true);
      fetchHeroMovie();
    }
  }, [userCityID]);

  const allGenres = feauredMovieData?.event.genres.map((currentGenre) => {
    return <Genre key={Math.random()}>{currentGenre}</Genre>;
  });

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
              <Tag style={{ background: "#31d885" }}>TAG</Tag>
              <Tag style={{ background: "#ee7f1d" }}>TAG</Tag>
            </TagsContainer>
            <FeaturedTitle style={{ marginBottom: 5 }}>
              {feauredMovieData?.event.title}
            </FeaturedTitle>
            <GenreContainer style={{ marginBottom: 20 }}>
              {allGenres}
            </GenreContainer>
          </div>
        </ImageContainer>
      )}
    </HeroContainer>
  );
}

export default Hero;
