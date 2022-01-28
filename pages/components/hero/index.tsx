import axios from "axios";
import React, { useEffect, useState } from "react";
import HeroContainer, { ImageContainer } from "./hero.styles";

function Hero() {
  const [movies, setMovies] = useState({});

  async function fetchHeroMovie() {
    try {
      const result = await axios.get(
        "https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home"
      );
      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchHeroMovie();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <HeroContainer>
      <ImageContainer>
        {/* <Image
            src={"/images/malevola.jpg"}
            width={888.89}
            height={500}
          ></Image> */}
      </ImageContainer>
    </HeroContainer>
  );
}

export default Hero;
