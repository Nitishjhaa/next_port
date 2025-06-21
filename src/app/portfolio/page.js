'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const items = [
  {
    name: 'Ivory',
    months: 'April',
    year: 2025,
    description: 'A luxury brand identity project focusing on timeless design and minimal elegance.',
    image: '/images/project1.jpg'
  },
  {
    name: 'Shabad',
    months: 'May',
    year: 2025,
    description: 'Spiritual music app with intuitive UX and subtle microinteractions.',
    image: '/images/project2.jpg'
  },
  {
    name: 'Three',
    months: 'June',
    year: 2024,
    description: 'Full-stack ecommerce site built with the MERN stack and Razorpay integration.',
    image: '/images/project3.jpg'
  },
  {
    name: 'Four',
    months: 'July',
    year: 2023,
    description: 'A documentary portfolio built for a film agency with scroll-triggered animations.',
    image: '/images/project4.jpg'
  }
];

export default function PortfolioHorizontalTabs() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div
      className="w-screen h-screen flex overflow-x-auto bg-black text-white"
      style={{
        backgroundImage: 'url("/images/vector.png")',
        fontFamily: 'Marcellus, serif'
      }}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-stretch transition-all duration-500">
          {/* Rotated Text Column */}
          <motion.div
            onClick={() => handleClick(index)}
            className="w-[100px] h-full flex items-center justify-center cursor-pointer bg-gradient-to-b from-zinc-900 to-zinc-800 border-r border-zinc-700 shadow-inner hover:brightness-110 transition-all"
          >
            <div className="transform rotate-90 flex flex-col items-center text-zinc-300 gap-1">
              <span className="uppercase tracking-wider font-bold text-sm">{item.name}</span>
              <span className="tracking-tight text-xs">{item.months} {item.year}</span>
            </div>
          </motion.div>

          {/* Sliding Content Panel */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                key={`panel-${index}`}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 80 }}
                transition={{ duration: 0.000 }}
                className="w-[60vw] h-full bg-gradient-to-br from-zinc-800 to-zinc-900 text-white p-10 flex flex-col justify-center items-start gap-6 shadow-xl border-r border-zinc-700"
              >
                <h1 className="text-5xl font-extrabold">{item.name}</h1>
                <p className="text-zinc-400 text-base max-w-[80%]">{item.description}</p>

                <div className="mt-4 w-full max-w-[80%] rounded-lg overflow-hidden border border-zinc-700 shadow-md">
                  <Image
                    src={item.image}
                    alt={`${item.name} preview`}
                    width={120}
                    height={120}
                    className="w-full object-cover h-[300px]"
                  />
                </div>

                <div className="flex gap-4 mt-6">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition">
                    Live Preview
                  </button>
                  <button className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-lg shadow transition">
                    GitHub
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
