'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import PricingLottie from './Lottie';
import Profile from '../../assets/animation/profile.json'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);

    return (
        <>
            <div className='w-full h-18 relative '>
                <div className='flex justify-between items-center w-full h-18'>
                    <div
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                        className='h-full w-[10%] rounded-full flex justify-center items-center max-md:ml-5 max-md:mt-4'>
                        <Link href="/" className={`${isHover? 'pt-30 duration-300' : 'duration-100'}`}>
                            <PricingLottie
                                animationData={Profile}
                                width={isHover ? "200px" : "80px"}
                                height={isHover ? "200px" : "80px"}
                            />
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="group w-14 h-14 max-md:w-10 max-md:h-10 rounded-full bg-black flex flex-col justify-center items-center gap-2 max-md:gap-1 transition-all duration-300 mr-10"
                    >
                        {/* Top bar */}
                        <span
                            className={`w-8 h-0.5 max-md:w-5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                        ></span>

                        {/* Bottom bar */}
                        <span
                            className={`w-5 mr-3 h-0.5 max-md:w-3 max-md:mr-1.5 bg-white transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-1.5' : ''}`}
                        ></span>
                    </button>
                </div>
            </div>

            {/* Slide-in Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="fixed top-0 right-0 h-screen bg-black text-white shadow-xl z-40 overflow-hidden"
                    >
                        {/* Close button inside panel (optional) */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-black w-14 h-14 max-md:w-10 max-md:h-10 flex flex-col justify-center items-center absolute top-2 right-10 max-md:top-4 text-3xl text-white max-md:text-[15px] rounded-full"
                        >
                            ✕
                        </button>

                        {/* Panel content */}
                        <div className='w-[90%] mx-auto h-full'>
                            <div className='h-[90%] flex justify-center items-center'>
                                <div className="h-full w-1/2 flex items-center justify-start text-2xl font-bold">
                                    <ul className="space-y-4 text-left">
                                        <li className='mb-5'>#Connect</li>
                                        <li>
                                            <span className='hover:text-gray-500'>LinkedIn</span>
                                        </li>
                                        <li>
                                            <span className='hover:text-gray-500'>WhatsApp</span>
                                        </li>
                                        <li>
                                            <span className='hover:text-gray-500'>Instagram</span>
                                        </li>
                                        <li>
                                            <span className='hover:text-gray-500'>GitHub</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="h-full w-1/2 flex items-center justify-center text-2xl font-bold">
                                    <ul className="space-y-4 text-left">
                                        <li className='hover:text-gray-500' onClick={() => setIsOpen(!isOpen)}><Link href="/blog">Blog</Link></li>
                                        <li className='hover:text-gray-500' onClick={() => setIsOpen(!isOpen)}><Link href="/about">About</Link></li>
                                        <li className='hover:text-gray-500' onClick={() => setIsOpen(!isOpen)}><Link href="/services">Services</Link></li>
                                        <li className='hover:text-gray-500' onClick={() => setIsOpen(!isOpen)}><Link href="/projects">PortFolio</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='h-fit flex relative'>
                                <div className='w-1/2'>
                                    <p className='max-md:text-[13px] text-gray-500'>Do you want to start your project now?</p>
                                    <a href="mailto:nj9876543210p@gmail.com">
                                        <h1 className='text-3xl max-md:text-2xl'>nj9876543210p@gmail.com</h1>
                                    </a>
                                </div>
                                <div className={`w-1/2 max-md:absolute bottom-30 max-md:w-full ${isOpen === false ? 'hidden' : 'block'}`}>
                                    <p>Book a Call?</p>
                                    <a href="tel:+919810135752">
                                        <h1 className='text-3xl max-md:text-2xl'>+91 981 013 5752</h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
