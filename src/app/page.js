'use client'

import {useEffect,useRef} from 'react'
import GetYear from './components/GetYear'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ServiceSection from './components/ServiceSection'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const divRef = useRef(null);

  useEffect(() => {
    gsap.to(divRef.current, {
      backgroundColor: "gray",
      ease: "power2.out",
      scrollTrigger: {
        trigger: divRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);


  return (
    <div className=''>
      <div className=''>
        <HomeSection />
        <AboutSection />
      </div>
      <div
        ref={divRef}
        className="w-full h-[200vh]"
        style={{ backgroundColor: "black" }}
      >
        {/* Content */}
      </div>
      <ServiceSection />

      <div className='absolute w-20 h-10 right-5 top-[90vh] bg-white rounded flex justify-center items-center'>
        <GetYear />
      </div>
    </div>
  )

}