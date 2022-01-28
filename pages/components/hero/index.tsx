import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CentralizedContainer, { HeroContainer } from "./hero.styles";

function Hero() {
  const [movies, setMovies] = useState({});

  async function fetchHeroMovie() {
    try {
      const result = await axios.get(
        "https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home",
        { headers: { "Access-Control-Allow-Origin": "*" } }
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
      <CentralizedContainer>
        {/* <Image width={process.env.MAIN_CONTAINER_WIDTH} height={500}></Image> */}
      </CentralizedContainer>
    </HeroContainer>
  );
}

export default Hero;
