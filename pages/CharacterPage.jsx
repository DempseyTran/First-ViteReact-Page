import React, { useState } from "react";
import Navbar from "./assets/Components/Navbar";
import Carousel from "./assets/Components/Carousel";
import slides from "./assets/jsonData/Carousel.json";
import Characters from "./assets/jsonData/SuicideSquad.json";
import HeroInfo from "./assets/jsonData/Hero.json";
import Data from "./assets/jsonData/dc_characters.json";
import Suicide from "./assets/Components/Suicide";
import Hero from "./assets/Components/Hero";
import FullCharacter from "./assets/Components/FullCharacter";
import Footer from "./assets/Components/Footer";

const CharacterPage = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  return (
    <div className="overflow-x-hidden">
      <Navbar
        isSearchVisible={isSearchVisible}
        toggleSearch={() => setIsSearchVisible((prev) => !prev)}
      />
      <Carousel slides={slides} />
      <Suicide Characters={Characters} />
      <Hero HeroInfo={HeroInfo} />
      <FullCharacter Data={Data} />
      <Footer />
    </div>
  );
};

export default CharacterPage;