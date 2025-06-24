'use client'

import React from 'react'
import PricingLottie from './components/Lottie'
import Profile from '../assets/animation/profile.json'
import GetYear from './components/GetYear'



export default function Home() {

  const year = new Date().getFullYear()

  return (
  <div className='relative'>
    
    <div className='absolute w-20 h-10 right-5 top-[90vh] bg-white rounded flex justify-center items-center'>
     <GetYear />
    </div>
  </div>
  )

}