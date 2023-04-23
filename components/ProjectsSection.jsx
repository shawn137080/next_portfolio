"use client"
import React, {useState,useEffect} from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { urlFor, client } from "../app/sanity.client";


const ProjectsSection = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
    });
  }, []);

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 pb-10 md:pb-24">
        {works?.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href="">
                      <Image
                        src={urlFor(project?.imgUrl).url()}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-2 md:w-1/2">
                    <h1 className="text-2xl font-bold mb-6">{project?.title}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project?.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project?.projectLink} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project?.codeLink} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                    <div className="mt-4 flex justify-start">
                      {project?.tags?.map((tag,idx)=>(
                        <span key={idx} className="px-2 mr-2 rounded-full border-teal-600 border text-neutral-600 dark:text-neutral-400 capitalize">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
