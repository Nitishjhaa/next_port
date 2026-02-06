"use client"

import { useState } from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import {clientProject, personalProject} from '@/app/utils/projects'

const Projects = () => {

    const [activetab, setActiveTab] = useState(true);

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
                            <div key={i} className='border-l-2 border-gray-400 flex max-md:flex-col pl-10 relative mb-20 h-fit'>
                                <div className='w-1/2  max-md:w-full'>
                                    <a href={projects.liveUrl} target='_blank'>
                                        <img src={projects.img} alt="" className='object-fit rounded-2xl' />
                                    </a>
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
                                    <div className='absolute left-10 bottom-5 max-md:-bottom-3'>
                                        <a href={projects.liveUrl} className='px-5 py-3 border mb-5 rounded-xl' target='_blank'>
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
                                <div key={i} className='border-l-2 border-gray-400 flex max-md:flex-col pl-10 relative mb-20 h-fit'>
                                    <div className='w-1/2 max-md:w-full cursor-pointer'>
                                        <a href={projects.liveUrl} target='_blank'>
                                            <img src={projects.img} alt="" className='object-fit rounded-2xl' />
                                        </a>
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
                                            <a href={projects.liveUrl} className='px-5 py-3 border mb-5 rounded-xl' target='_blank'>
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
