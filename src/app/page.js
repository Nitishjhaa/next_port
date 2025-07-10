'use client'

import React from 'react'
import PricingLottie from './components/Lottie'
import Profile from '../assets/animation/profile.json'
import GetYear from './components/GetYear'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ServiceSection from './components/ServiceSection'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  return (
    <div className=''>
      <div className=''>
        <HomeSection />
        <AboutSection />
      </div>
      <div className='h-screen bg-black '>

      </div>

      <div className='absolute w-20 h-10 right-5 top-[90vh] bg-white rounded flex justify-center items-center'>
        <GetYear />
      </div>
    </div>
  )

}