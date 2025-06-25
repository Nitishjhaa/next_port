'use client'

import React from 'react'
import PricingLottie from './components/Lottie'
import Profile from '../assets/animation/profile.json'
import GetYear from './components/GetYear'
import HomeSection from './components/HomeSection'
import Navbar from "./components/Navbar";
import AboutSection from './components/AboutSection'


export default function Home() {

  return (
    <div className=''>
      <div className="z-10 w-full">
        <Navbar />
      </div>

      <div className='mt-6'>
        <HomeSection />
        <AboutSection />
      </div>

      <div className='absolute w-20 h-10 right-5 top-[90vh] bg-white rounded flex justify-center items-center'>
        <GetYear />
      </div>
    </div>
  )

}