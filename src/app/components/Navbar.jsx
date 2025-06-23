'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TfiClose } from "react-icons/tfi";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);

    const Social = [
        { id: 1, name: "Github", icon: <FaGithub /> },
        { id: 2, name: "Instagram", icon: <FaInstagram /> },
        { id: 3, name: "Linkedin", icon: <FaLinkedinIn /> },
    ];

    return (
        <>
            <div className='h-11 w-[80%] relative mx-auto mt-10 rounded-full backdrop-blur-xs flex items-center bg-white'>
                <div className='flex w-full h-full justify-between'>
                    <div className='flex gap-5 h-full items-center'>
                        <span>
                            <Image
                                src='/images/logo-black.png'
                                width={33}
                                height={33}
                                alt='logo'
                                className='ml-2 rounded-full'
                            />
                        </span>
                        <span className=''>
                            Full-stack web artisan turning ideas into digital products.
                        </span>
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
        </>
    );
}
