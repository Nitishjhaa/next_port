"use client"

import { useState } from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

const Projects = () => {

    const [activetab, setActiveTab] = useState(true)

    const clientProject = [
        {
            img: "/images/igl.png",
            name: "IGL Lab",
            liveUrl: "https://igllab.in/",
            techUsed: ["Html", "Css", "JavaScript", "Bootstrap", "Gsap"],
            heighLight: [
                "Developed a full static website from scratch using plain HTML, CSS, and JavaScript with GSAP for smooth scroll animations.",
                "The main focus was on performance and loading speed, achieved by carefully managing animations and minimizing asset sizes.",
                "Delivered a science-focused design with sleek lab visuals, interactive scrolling, and custom-made responsive layouts.",
            ]
        },
        {
            img: "/images/shabad.png",
            name: "Shabad Interiors",
            liveUrl: "https://www.shabadinteriors.com/",
            techUsed: ["Nuxt", "GraphQL"],
            heighLight: [
                "Contributed to the frontend development using Nuxt.js and GraphQL for a high-end interior design company.",
                "Worked closely with the designer to match the UI exactly as per the Figma file, ensuring responsiveness across all breakpoints.",
                "Faced a unique challenge with dynamic image rendering, which was solved by optimizing components and compressing images smartly via CDN.",
            ]
        },
        {
            img: "/images/ivory.png",
            name: "Ivory Interiors",
            liveUrl: "http://ivorydesignstudios.info/",
            techUsed: ["React", "Framer Motion", "Tailwind", "GSAP"],
            heighLight: [
                "Built interactive and animated pages using Framer Motion and GSAP, bringing modern motion design to life.",
                "The biggest challenge was synchronizing GSAP scroll animations with component-based React structure while maintaining performance.",
                "Worked on advanced image layering and transitions that elevated the user experience and impressed the client visually.",
            ]
        },
        {
            img: "/images/grace.png",
            name: "Grace Chairs",
            liveUrl: "https://www.gracechairs.com/",
            techUsed: ["Html", "Css", "JavaScript", "Bootstrap", "Gsap"],
            heighLight: [
                "Designed and developed a luxury furniture brand website focusing on premium product presentation and smooth browsing flow.",
                "Integrated GSAP animations for elegant section reveals, giving a handcrafted and modern feel that aligns with the brand’s high-end furniture identity.",
                "Focused on responsive layouts, ensuring the same aesthetic consistency on mobile and large screens with precise element positioning."
            ]
        },
        {
            img: "/images/llp.png",
            name: "SecureBooks LLP",
            liveUrl: "https://securebooksllp.com/",
            techUsed: ["Html", "Css", "JavaScript", "Bootstrap", "Gsap"],
            heighLight: [
                "Built a corporate site for a finance and accounting consultancy, emphasizing trust, professionalism, and clarity.",
                "Structured information-heavy content cleanly using modular Bootstrap grids and animated entrances for better readability.",
                "Added GSAP-based subtle transitions and icons to convey a polished, tech-savvy image while maintaining fast performance."
            ]
        },
        {
            img: "/images/odpl.png",
            name: "ODPL",
            liveUrl: "https://odpl.net.in/",
            techUsed: ["Html", "Css", "JavaScript", "Bootstrap", "Gsap"],
            heighLight: [
                "Created a robust industrial and logistics company website with a strong, corporate aesthetic.",
                "Used GSAP animations for loading sequences and content slides, providing an engaging yet professional visual experience.",
                "Focused on structuring data-heavy pages to look organized and easy to navigate, ensuring clarity for potential clients."
            ]
        },
        {
            img: "/images/tarun.png",
            name: "Tarun Gaur",
            liveUrl: "https://tarungaur.in/",
            techUsed: ["Html", "Css", "JavaScript", "Bootstrap", "Gsap"],
            heighLight: [
                "Designed a personal brand website for a political and social leader, blending authority with approachability.",
                "Implemented GSAP-based entry animations to highlight achievements, events, and media coverage dynamically.",
                "Optimized for both desktop and mobile audiences, ensuring fast load times despite image-rich sections."
            ]
        },
        {
            img: "/images/mavrik.png",
            name: "Little Mavericks",
            liveUrl: "https://littlemavericks.in/",
            techUsed: ["Html", "Css", "JavaScript", "Bootstrap", "Gsap"],
            heighLight: [
                "Developed a vibrant and playful website for a preschool brand to reflect its joyful learning environment.",
                "Integrated fun scroll-based animations and color transitions using GSAP to capture kids’ energy and creativity.",
                "Carefully balanced visuals and performance, ensuring smooth animations even on low-end mobile devices."
            ]
        }


    ]


    const personalProject = [
        {
            img: "/images/kundali.png",
            name: "Divine Kundali",
            liveUrl: "https://kundali-nine.vercel.app/",
            techUsed: ["ReactJs", "Gsap", , "Tailwind", "MongoDB", "ExpressJs", "NodeJs"],
            heighLight: [
                "Developed a full-stack astrology application that generates and analyzes Kundalis using user birth details.",
                "Implemented dynamic GSAP animations for smooth scroll effects, enhancing engagement and overall user flow.",
                "Built custom backend logic in Node.js and Express to compute Vedic astrology charts, integrated with MongoDB for storing user data and predictions.",
            ]
        },
        {
            img: "/images/forever.png",
            name: "E-commerce",
            liveUrl: "http://localhost:8000",
            techUsed: ["ReactJs", "Gsap", , "Tailwind", "MongoDB", "ExpressJs", "NodeJs"],
            heighLight: [
                "Developed a full-stack astrology application that generates and analyzes Kundalis using user birth details.",
                "Implemented dynamic GSAP animations for smooth scroll effects, enhancing engagement and overall user flow.",
                "Built custom backend logic in Node.js and Express to compute Vedic astrology charts, integrated with MongoDB for storing user data and predictions.",
            ]
        }

    ]

    return (
        <div className='w-full h-screen'>
            <h1 className='text-5xl font-bold mb-5 montez'>
                Projects
            </h1>

            <button
                className={`px-5 py-2 border mb-5 rounded-xl duration-300 active:scale-95 ${activetab === true ? 'bg-gray-300 text-black ' : 'bg-black text-white'} `}
                onClick={(() => setActiveTab(true))}>
                Clients Project
            </button>
            <button
                className={`ml-5 px-5 py-2 border mb-5 rounded-xl duration-300 text-black active:scale-95 ${activetab === false ? 'bg-gray-300' : 'bg-black text-white'} `}
                onClick={(() => setActiveTab(false))}>
                Personal Project
            </button>

            {activetab === true &&
                <div className='h-full'>
                    <div className=' py-5 h-fit'>
                        {clientProject.map((projects, i) => (
                            <div key={i} className='border-l-2 border-gray-400 flex max-md:flex-col pl-10 relative mb-10 h-fit'>
                                <div className='w-1/2  max-md:w-full'>
                                    <img src={projects.img} alt="" className='object-fit rounded-2xl' />
                                </div>

                                <div className='w-1/2 pl-5 pt-5 max-md:w-full pr-5'>
                                    <h2 className='text-3xl'>{projects.name} </h2>
                                    <div className='mt-3'>
                                        {projects.heighLight.map((entries, ix) => (
                                            <div key={ix} className='mb-5 flex gap-3'>
                                                <BsArrowReturnRight size={50} /> {entries}
                                            </div>
                                        ))}
                                    </div>

                                    <div className='pt-2 pb-7 ml-5 max-md:ml-0'>
                                        {projects.techUsed.map((e, iy) => (
                                            <div key={iy} className='border px-3 inline-block py-1 ml-3 mb-3 rounded-xl bg-[#164728]'>
                                                {e}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='absolute left-10 bottom-5 max-md:-bottom-1'>
                                        <a href={projects.liveUrl} className='px-5 py-4 border mb-5 rounded-xl' target='_blank'>
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
            {activetab === false &&
                <div >
                    <div className='h-full'>
                        <div className=' py-5 h-fit'>
                            {personalProject.map((projects, i) => (
                                <div key={i} className='border-l-2 border-gray-400 flex max-md:flex-col pl-10 relative mb-10 h-fit'>
                                    <div className='w-1/2  max-md:w-full'>
                                        <img src={projects.img} alt="" className='object-fit rounded-2xl' />
                                    </div>

                                    <div className='w-1/2 pl-5 pt-5 max-md:w-full pr-5'>
                                        <h2 className='text-3xl'>{projects.name} </h2>
                                        <div className='mt-3'>
                                            {projects.heighLight.map((entries, ix) => (
                                                <div key={ix} className='mb-5 flex gap-3'>
                                                    <BsArrowReturnRight size={50} /> {entries}
                                                </div>
                                            ))}
                                        </div>

                                        <div className='pt-2 pb-7 ml-5 max-md:-ml-9 max-sm:w-[350px]'>
                                            {projects.techUsed.map((e, iy) => (
                                                <div key={iy} className='border px-3 inline-block py-1 ml-3 mb-3 rounded-xl bg-[#164728]'>
                                                    {e}
                                                </div>
                                            ))}
                                        </div>
                                        <div className='absolute left-10 bottom-5 max-md:-bottom-5'>
                                            <a href={projects.liveUrl} className='px-5 py-4 border mb-5 rounded-xl' target='_blank'>
                                                Visit Website
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Projects
