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
        className="overflow-hidden bg-black shadow-xl "
        style={{
          position: 'absolute',
          zIndex: 10,
        }}
      >
      </div>
      <div className='h-60 w-60 bg-red-400 absolute left-10'>

      </div>
    </section>
  )
}
