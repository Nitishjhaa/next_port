'use client'

import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiReaddotcv } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
import Focus from './components/Focus'

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <div className="flex relative max-md:flex-col">
        <Focus isFocused={isFocused} setIsFocused={setIsFocused} />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[45vw] max-md:w-[100vw] h-screen fixed max-md:relative top-0 left-0"
        >
          <div className="h-screen w-[60%] mx-auto max-md:w-[90%]">
            <div className="border mt-10 w-35 h-35 rounded-full overflow-hidden">
              <img src="/images/pic.png" className="scale-125 ml-2" alt="nitish_img" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mt-5">Nitish Kumar Jha</h1>
              <h6 className={`text-xl ${isFocused ? '' : 'text-[#9CA3AF]'}  mt-3`}>Full Stack Web Developer</h6>
              <h4 className={`text-xl mt-3 flex gap-3 items-center text-[#9CA3AF] ${isFocused ? 'opacity-0' : ''}`}>
                <FaMapLocationDot size={30} />Delhi, India
                <span className="text-sm mt-1 -ml-1">IN</span>
              </h4>
              <p className={`text-gray-300 text-md mt-4 ${isFocused ? 'opacity-0' : ''}`}>Building Real Products For Real Clients, Not Just More Projects</p>
              <div className="mt-4 flex items-center gap-6">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/api/download-cv';
                    link.setAttribute('download', 'nitish_cv.pdf');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="group w-35 h-10 border rounded-xl duration-300 hover:bg-gray-300 hover:text-black flex justify-center items-center gap-3 active:scale-90"
                >
                  <div className="-rotate-45 group-hover:rotate-0 duration-300">
                    <SiReaddotcv />
                  </div>
                  Download CV
                </button>
                <div className={`flex gap-5 ${isFocused ? 'opacity-0' : ''}`}>
                  <a href="https://github.com/Nitishjhaa" target="_blank">
                    <FiGithub size={25} color="#9CA3AF" className="rotate-0 hover:rotate-15 duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/nitish-jhaa/" target="_blank">
                    <AiOutlineLinkedin size={25} color="#9CA3AF" className="rotate-0 hover:rotate-15 duration-300" />
                  </a>
                  <a href="" target="_blank">
                    <FaInstagram size={25} color="#9CA3AF" className="rotate-0 hover:rotate-15 duration-300" />
                  </a>
                  <a
                    href="https://wa.me/919810135752"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp
                      size={25}
                      color="#9CA3AF"
                      className="rotate-0 hover:rotate-15 duration-300"
                    />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-[55vw] max-md:w-[100vw] max-md:p-5 min-h-screen absolute right-0 max-md:relative"
        >
          <About isFocused={isFocused} />
          <Skills isFocused={isFocused} />
          <Experience isFocused={isFocused} />
          <Projects isFocused={isFocused} />
        </motion.div>
      </div>
    </>
  );
}