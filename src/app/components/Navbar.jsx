'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='w-full h-18 '>
                <div className='flex justify-between items-center h-18'>
                    <div className='h-full w-[10%] rounded-full flex justify-center items-center'>
                        <Link href="/">
                            <Image src='/images/logo.png' width={60} height={60} alt='logo' />
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="group w-14 h-14 rounded-full bg-black flex flex-col justify-center items-center gap-2 transition-all duration-300 mr-10"
                    >
                        {/* Top bar */}
                        <span
                            className={`w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                        ></span>

                        {/* Bottom bar */}
                        <span
                            className={`w-5 mr-3 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-1.5' : ''}`}
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
                        className="fixed top-0 right-0 h-screen bg-white shadow-xl z-40 overflow-hidden"
                    >
                        {/* Close button inside panel (optional) */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-black w-14 h-14 flex flex-col justify-center items-center absolute top-2 right-10 text-3xl text-white rounded-full"
                        >
                            ✕
                        </button>

                        {/* Panel content */}
                        <div className='w-[90%] mx-auto h-full border' >
                            <div className='h-[90%] flex justify-center items-center'>
                                <div className="h-full w-1/2 flex items-center justify-start text-2xl font-bold">
                                    <ul className="space-y-4 text-left">
                                        <li className='mb-5'>#Connect</li>
                                        <li>LinkedIn</li>
                                        <li>WhatsApp</li>
                                        <li>Instagram</li>
                                    </ul>
                                </div>
                                <div className="h-full w-1/2 flex items-center justify-center text-2xl font-bold">
                                    <ul className="space-y-4 text-left">
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li><Link href="/about">About</Link></li>
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/projects">PortFolio</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='border h-fit'>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
