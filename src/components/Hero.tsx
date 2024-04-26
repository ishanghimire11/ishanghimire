import React from "react";
import Image from "next/image";

import HeroImage from "@/assets/hero.webp";

const Hero = () => {
  return (
    <section className="py-12 md:py-32 2xl:pt-20 2xl:pb-80">
      <div className="flex flex-col md:flex-row md:justify-between gap-x-24">
        <div className="max-w-[80em] w-fit flex flex-col justify-center pb-8 md:pb-0">
          <h1 className="text-6xl font-medium sm:text-7xl md:text-8xl pb-4 sm:pb-6 lg:pb-12 lg:text-9xl 2xl:text-[10rem] max-w-[50rem]">
            {/* Fullstack Developer */}
            Ishan Ghimire
          </h1>
          <p className="max-w-[700px] text-md sm:text-lg md:text-xl lg:text-2xl tracking-wide">
            Greetings, I am a fullstack developer - I specialize in transforming
            ideas into immersive digital experiences. Through coding expertise
            and design finesse, I craft dynamic web solutions that captivate and
            engage users.
          </p>
        </div>
        <div>
          <Image
            src={HeroImage}
            alt=""
            className="h-[450px] md:max-h-[800px] rounded-t-full rounded-tr-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
