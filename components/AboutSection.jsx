"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor, client } from "../app/sanity.client";

// const skills = [
//   { skill: "HTML" },
//   { skill: "CSS" },
//   { skill: "JavaScript" },
//   { skill: "TypeScript" },
//   { skill: "Python" },
//   { skill: "React" },
//   { skill: "Next.js" },
//   { skill: "Tailwind CSS" },
//   { skill: "Git" },
//   { skill: "GitHub" },
//   { skill: "Jupyter Notebooks" },
// ]

const AboutSection = () => {
  const [skills, setSkills] = useState([]);
  const [abouts, setAbouts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const aboutsQuery = '*[_type == "abouts"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
    client.fetch(aboutsQuery).then((data) => {
      setAbouts(data[0]);
    });
  }, []);

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-40">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 text-justify tracking-tight">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            {abouts?.fixedContent?.map((item, idx) => (
              <p
                className="mb-4"
                key={idx}
              >
                {item}
              </p>
            ))}
            {!showAll && (
              <button
                className="px-2 py-1 text-white bg-teal-600 rounded-md md:hidden hover:bg-teal-700"
                onClick={handleShowAll}
              >
                Show more
              </button>
            )}
            {abouts?.toggledContent?.map((item, idx) => (
              <p
                className={`mb-4 ${showAll ? "" : "hidden md:block"}`}
                key={idx}
              >
                {item}
              </p>
            ))}
            {/* <p>
              Hi, my name is Shawn and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Los Angeles, CA.
            </p>
            <br /> */}
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills?.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-300 px-4 py-2 mr-2 mt-2 text-slate-600 rounded font-semibold hover:bg-teal-500 cursor-default"
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
