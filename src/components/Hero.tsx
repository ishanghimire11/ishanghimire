import React from "react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32 2xl:py-40">
      <div className="max-w-[80em]">
        <h1 className="text-6xl sm:text-7xl md:text-8xl pb-4 sm:pb-6 lg:pb-12 lg:text-9xl 2xl:text-[10rem] max-w-[50rem]">
          Fullstack Developer
        </h1>
        <p className="max-w-[700px] text-md sm:text-lg md:text-xl lg:text-2xl tracking-wide">
          I'm Ishan Ghimire, a developer - I specialize in transforming ideas
          into immersive digital experiences. Through coding expertise and
          design finesse, I craft dynamic web solutions that captivate and
          engage users.
        </p>
      </div>
    </section>
  );
};

export default Hero;
