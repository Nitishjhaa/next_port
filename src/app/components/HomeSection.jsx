import { useEffect, useState } from 'react';
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownloadCloud } from "react-icons/fi";


const HomeSection = () => {

    const [count, setCount] = useState(0);
    const maxCount = 10;


    useEffect(() => {
        if (count >= maxCount) return;

        const timer = setTimeout(() => {
            setCount(prev => prev + 1);
        }, 2000);

        return () => clearTimeout(timer);
    }, [count]); 


    return (
        <div className='mx-auto w-[80%] h-[84vh] overflow-hidden'>
            <div className='flex max-md:flex-col-reverse'>
                <motion.div
                    initial={{ opacity: 0, x: -120 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className='w-1/2 max-md:w-full mt-10 '
                >
                    <div>
                        <h2 className='text-4xl max-md:text-3xl mb-3'>ℍello...</h2>
                        <h2 className='text-7xl max-md:text-5xl'>I am <span>ℕ</span>itish Jha</h2>
                        <p className='text-xl ml-2'> — Mern-Stack Developer</p>
                    </div>
                    <div>
                        <motion.button
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/api/download-cv';
                                link.setAttribute('download', 'nitish_cv.pdf');
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                            className="relative overflow-hidden bg-white w-40 h-11 rounded mt-10 max-md:mt-5"
                        >
                            {/* Sliding overlay */}
                            <motion.div
                                variants={{
                                    rest: { y: '-100%' },
                                    hover: { y: '0%' },
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="absolute inset-0 bg-black z-0"
                            />

                            {/* Button Content */}
                            <motion.div
                                variants={{
                                    rest: { color: '#000' },
                                    hover: { color: '#fff' },
                                }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="flex justify-center items-center gap-2 text-lg z-10 relative"
                            >
                                <FiDownloadCloud />
                                Download CV
                            </motion.div>
                        </motion.button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                >
                    <div className='max-md:mt-2'>
                        <Image
                            src='/images/placeholder.avif'
                            width='890'
                            height='830'
                            alt='placeholder'
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HomeSection
