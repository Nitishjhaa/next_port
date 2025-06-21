'use client'

import React from 'react'
import SideTitle from './components/SideTitle'
import Animation from '../assets/animation/animation2.json'
import PricingLottie from './components/Lottie';


export default function Home() {
  return (
    <React.Fragment>
      <div 
        className='bg-black' 
        style={{ backgroundImage: 'url("/images/vector.png")', fontFamily: 'Marcellus, serif' }}>
        <div className='max-md:hidden'>
          <SideTitle />
        </div>
        <div className='w-[80%] mx-auto h-screen max-md:w-[90%]'>
          <div className='flex h-full max-md:flex-col'>
            <div className='w-1/2 h-full flex flex-col max-md:w-fit'>
              <div className='h-1/8'>

              </div>
              <div className='h-6/8 max-md:mt-15'>
                <div className='flex gap-20'>
                  <div className='relative text-white'>
                    <h2 className='text-6xl relative'>10<span className='text-2xl absolute'>+</span></h2>
                    <span>Projects Completed</span>
                  </div>
                  <div className='relative text-white'>
                    <h2 className='text-6xl relative'>2<span className='text-2xl absolute'>+</span></h2>
                    <span>Year's Of Expirience</span>
                  </div>
                </div>
                <div className='h-[60%] flex flex-col justify-center items-start text-white'>
                  <h2 className='text-9xl mt-10'>Hello</h2>
                  <div className='flex items-center'>
                    <hr className='w-5' />
                    <h5 className='text-2xl ml-2 '> It's Nitish Kumar Jha</h5>
                  </div>
                </div>
                <div>
                  <button className="button type1 max-md:mt-5"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/api/download-cv';
                      link.setAttribute('dowwnload', 'nitish_cv.pdf');
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link)
                    }}
                  >
                    <span className="text-white">Download CV</span>
                  </button>
                </div>
              </div>
              <div className='h-1/8'>

              </div>
            </div>
            <div className='w-1/2 h-full max-md:w-fit'>

            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}