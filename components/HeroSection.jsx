"use client"; // this is a client component
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { urlFor, client } from "../app/sanity.client";
import placeholderImage from "../public/blur.png";

const HeroSection = () => {
  const [hero, setHero] = useState();

  useEffect(() => {
    const query = '*[_type == "hero"]';
    client.fetch(query).then((data) => {
      setHero(data[0]);
      console.log(data[0]);
    });
  }, []);

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:pt-24 md:pt-48 md:flex-row md:space-x-4 md:text-left md:pb-10 md:mb-8">
        <div className="md:mt-2 md:w-1/2 ">
          {hero ? (
            <Image
              src={urlFor(hero.profile).url()}
              alt="hero"
              width={325}
              height={325}
              className="rounded-full shadow-2xl "
            />
          ) : (
            <Image
              src={placeholderImage}
              alt="hero"
              width={325}
              height={325}
              className="rounded-full shadow-2xl "
            />
          )}
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Shawn!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Full Stack Developer{" "}
            </span>
            based in Toronto, Canada. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          <div className="flex flex-row justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/shawn-pan-137080/"
              className="text-neutral-100 font-semibold px-6 py-3 mr-4 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin size={30} />
            </a>
            <a
              href="https://github.com/shawn137080"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 cursor-pointer"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub size={30} className="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center mb-4 pb-4">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
