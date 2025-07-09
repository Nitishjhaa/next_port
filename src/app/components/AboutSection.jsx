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
          end: '+=10%',
          scrub: true,
          // pin: true,
        },
      })

      tl.fromTo(
        imageRef.current,
        {
          scale: 1,
          width: '400px',
          height: '400px',
          borderRadius: '30px',
        },
        {
          scale: 1.05,
          width: '120vw',
          height: '120vh',
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
        <img
          src="/images/drag.png"
          alt="Zoom Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
