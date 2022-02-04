import React, { useEffect, useState } from "react";
import { IEvent } from "../../movies";
import Loading from "../loading";
import TagsContainer, { Tag } from "../tag/tag.styles";
import VerticalMovieContainer, {
  ImageContainer,
  MovieTitle,
  MovieTitleContainer,
  VerticalMovieDataContainer,
} from "./verticalMovie.styles";

function VerticalMovie({ event }: IEvent) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    event && setLoading(false);
  }, [event]);

  return loading ? (
    <Loading />
  ) : (
    <VerticalMovieContainer>
      <ImageContainer
        href={event.trailers[0].url}
        target={"_blank"}
        url={event ? event?.images[0].url : ""}
      />
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
