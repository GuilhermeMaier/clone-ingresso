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

function VerticalMovie({ event }: IEvent) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    event && setLoading(false);
  }, [event]);

  return loading ? (
    <Loading />
  ) : (
    <VerticalMovieContainer>
      <ImageContainer url={event ? event?.images[0].url : ""} />
      <VerticalMovieDataContainer>
        <MovieTitleContainer>
          <TagsContainer>
            <Tag style={{ background: "#31d885" }}>Tag</Tag>
            <Tag style={{ background: "#ee7f1d" }}>Tag</Tag>
          </TagsContainer>
          <MovieTitle>{event?.title}</MovieTitle>
        </MovieTitleContainer>
      </VerticalMovieDataContainer>
    </VerticalMovieContainer>
  );
}

export default VerticalMovie;
