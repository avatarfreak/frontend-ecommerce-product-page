import React from "react";
import Content from "./content";
import LightBox from "./lightbox";

const MainContent = () => {
  return (
    <main className="relative w-full md:mt-12 lg:flex lg:items-center lg:justify-center">
      <LightBox />
      <Content />
    </main>
  );
};

export default MainContent;
