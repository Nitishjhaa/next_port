'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { TfiClose } from "react-icons/tfi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineMusicNote } from "react-icons/md";
import { MdOutlineMusicOff } from "react-icons/md";

export default function Navbar() {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)

    const audioRef = useRef(null)

    useEffect(() => {
        if (!audioRef.current) return

        if (isMusicPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isMusicPlaying])

    const Social = [
        { id: 1, name: "Github", icon: <FaGithub /> },
        { id: 2, name: "Instagram", icon: <FaInstagram /> },
        { id: 3, name: "Linkedin", icon: <FaLinkedinIn /> },
    ];

    return (
        <>
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
                <div className='h-11 w-[80%] max-md:w-[90%] relative mx-auto mt-10 rounded-full backdrop-blur-xs flex items-center bg-white'>
                    <div className='flex w-full h-full justify-between'>
                        <div className='flex gap-8 max-md:gap-6 h-full items-center'>
                            <span>
                                <Image
                                    src='/images/logo-black.png'
                                    width={33}
                                    height={33}
                                    alt='logo'
                                    className='ml-2 rounded-full scale-200'
                                />
                            </span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, }}
                                transition={{ duration: 0.4, delay: 0.3, ease: 'easeInOut' }}
                                className='max-md:text-[12px]'
                            >
                                Full-stack web artisan turning ideas into digital products.
                            </motion.span>
                        </div>
                        <div className='flex gap-5 h-full items-center max-md:hidden'>
                            <span className='mr-5 cursor-pointer' onClick={() => setIsClicked(prev => !prev)}>
                                Social Links <span className='text-xl'>↗</span>
                            </span>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isClicked && (
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className='bg-[#f9f9f9] absolute top-0 w-full h-25 flex justify-between items-center shadow-md z-10'
                        >
                            <div className='ml-10 flex gap-10'>
                                {Social.map((e) => {
                                    const isActive = selectedTab === e.id;
                                    return (
                                        <motion.div
                                            key={e.id}
                                            onClick={() => setSelectedTab(e.id)}
                                            whileHover="hover"
                                            initial="rest"
                                            animate={isActive ? "hover" : "rest"}
                                            variants={{
                                                rest: { color: "#000" },
                                                hover: { color: "#fff" }
                                            }}
                                            className="relative overflow-hidden cursor-pointer text-3xl flex gap-3 border p-3 w-80 rounded-xl z-0 transition-colors duration-300 shadow-md"
                                        >
                                            <motion.div
                                                variants={{
                                                    rest: { y: "-100%" },
                                                    hover: { y: "0%" }
                                                }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="absolute inset-0 bg-black z-[-1] rounded-xl"
                                            />
                                            {e.icon} {e.name}
                                        </motion.div>
                                    );
                                })}
                            </div>
                            <button
                                onClick={() => setIsClicked(false)}
                                className='mr-5'
                            >
                                <div className='border flex justify-center items-center rounded-2xl h-10 w-10 active:bg-black active:text-white'>
                                    <TfiClose />
                                </div>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
                <audio ref={audioRef} src="/music/alone.mp3" loop />
                <button
                    className='absolute left-[93%] top-11 bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer active:scale-90'
                    onClick={() => setIsMusicPlaying(prev => !prev)}
                >
                    {isMusicPlaying ? <MdOutlineMusicNote size={25} /> : <MdOutlineMusicOff size={25} />}
                </button>
            </motion.div>


        </>
    );
}
