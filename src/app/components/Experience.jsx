import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

  const exp = [
    {
      id: 1,
      icon: "/images/codesparrow.png",
      companyName: "Code Sparrow",
      place: "Delhi, Janakpuri West",
      period: "(6 Months)",
      work: [
        "Developed dynamic full-stack web applications using React.js and Node.js.",
        "Built custom APIs and integrated MongoDB for scalable data handling.",
        "Implemented responsive UI components with Tailwind CSS and Bootstrap.",
      ],
      years: "January 2025 - Present",
      tech: ["ReactJs", "TailwindCss", "Bootstrap", "NextJs", "Javascript", "NodeJs", "ExpressJs", "MongoDB", "PostgreSQL"],
      role: "Full-Stack Developer"
    },
    {
      id: 2,
      icon: "/images/magicMonk.jpg",
      companyName: "The Magic Monks",
      place: "Haryana, Gurugram",
      period: "(6 Months)",
      work: [
        "Developed dynamic full-stack web applications using React.js and Node.js.",
        "Built custom APIs and integrated MongoDB for scalable data handling.",
        "Implemented responsive UI components with Tailwind CSS and Bootstrap.",
      ],
      years: "July 2024 - January 2025",
      tech: ["ReactJs", "TailwindCss", "Bootstrap", "Javascript", "NodeJs", "ExpressJs", "MongoDB"],
      role: "Full-Stack Developer"
    },
    {
      id: 3,
      icon: "/images/netronix.png",
      companyName: "Netronix Pvt Ltd",
      place: "Delhi, Dwarka, Dabri",
      period: "(1 Year)",
      work: [
        "Designed and developed responsive, User-friendly web application.",
        "Collaborating with back-end dev to create smooth intractive website",
        "Ensuring Cross browser compablity and optimizing website for speed and scalabiity",

      ],
      years: "May 2023 - June 2024",
      tech: ["Html", "Css", "Javascript", "React", "TailwindCss", "Bootstrap"],
      role: "Frontend Developer"
    }
  ]


  return (
    <div className='w-full my-10'>
      <h1 className='text-5xl font-bold mb-5 montez'>
        Experience
      </h1>
      <div className=''>
        {exp.map((experience) => (
          <div key={experience.id}>
            <div className="my-10 border-l-2 pl-5 ">
              <div className='flex gap-5 mb-4'>
                <div>
                  <img src={experience.icon} alt={experience.companyName} className="w-25 h-25 rounded-full" />
                </div>
                <div>
                  <div className="text-3xl font-semibold">{experience.companyName}</div>
                  <div className="text-gray-400">{experience.place}</div>
                  <div className="text-gray-400 inline-block pr-5">{experience.years}</div>
                  <span className="text-gray-400">{experience.period}</span>
                </div>
              </div>
              <div className="text-lg font-bold text-gray-300">{experience.role}</div>

              {experience.work.map((worked, i) => (
                <span key={i} className='py-0.5 flex gap-3'>
                  <BsArrowReturnRight /> {worked}

                </span>
              ))}

              <div className="flex flex-wrap gap-2 mt-2">
                {experience.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
