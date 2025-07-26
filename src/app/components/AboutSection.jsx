'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, spring } from 'framer-motion'

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
          backgroundImage: 'url("/images/bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 40px 60px rgba(0, 0, 0, 0.4)',
        }}
      />

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20, duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className='h-60 w-80 absolute left-10'>
        <div className='text-4xl font-extrabold text-center'>
          30+ <br />
          <span>
            Projects Completed
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20, duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className='h-60 w-80 absolute right-10'>
        <div className='text-4xl font-extrabold text-center'>
          300+ <br />
          <span>
            contributions on Github
          </span>
        </div>
      </motion.div>
    </section>
  )
}
