'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ImageZoomSection() {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top start',
          end: '+=100%',
          scrub: true,
          pin: true,
        },
      })

      tl.fromTo(
        imageRef.current,
        {
          scale: 1,
          width: '600px',
          height: '600px',
          borderRadius: '30px',
        },
        {
          scale: 1.05,
          width: '100vw',
          height: '100vh',
          borderRadius: '0px',
          ease: 'power2.out',
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100vh] flex justify-center items-center overflow-hidden"
    >
      <div
        ref={imageRef}
        className="overflow-hidden bg-black shadow-2xl rounded-xl"
        style={{
          position: 'absolute',
          zIndex: 10,
          width: '340px',
          height: '480px',
          transform: 'rotateY(-14deg) rotateX(6deg) skewY(1deg)',
          backgroundImage: 'url("https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?_gl=1*1r47bff*_ga*MjcwOTUyOTUxLjE3NDI2MjY1MDQ.*_ga_8JE65Q40S6*czE3NTIyNTAxMzgkbzIwJGcxJHQxNzUyMjUwNDc3JGozMSRsMCRoMA..")', // Replace with your actual path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 40px 60px rgba(0, 0, 0, 0.4)',
        }}
      />

      <div className='h-60 w-80 absolute left-10'>
        <div>
          placeholder
        </div>
      </div>
      <div className='h-60 w-80 absolute right-10'>
        <div>
          placeholder
        </div>
      </div>
      <div className='w-180 absolute bottom-4 left-105'>
        <div>
          placeholder
        </div>
      </div>
    </section>
  )
}
