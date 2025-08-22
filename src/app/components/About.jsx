import React from 'react'

const About = ({ isFocused }) => {
    return (
        <div className='w-full h-full my-10 max-md:-mt-40'>
            <h1 className='text-5xl font-bold montez inline-block'>
                About Me
            </h1>
            <div className="text-white text-md max-md:text-sm leading-relaxed max-w-3xl mt-5">
                <p>
                    <span>
                        A 25-year-old full stack developer from Delhi, India with over 2 years of hands-on experience.
                    </span>

                    <span className={`${isFocused ? "opacity-0" : ""}`}>
                        &nbsp;I specialize in
                    </span>

                    <span >
                        building scalable, production-ready web applications using the MERN stack.
                    </span>

                    <span className={`${isFocused ? "opacity-0" : ""}`}>
                        My work spans real client projects, from custom dashboards and API-driven platforms to animation-rich, interactive UIs that balance performance with design aesthetics. Every product I build is rooted in real-world usability, clean code, and thoughtful architecture.
                    </span>
                </p>

                <p className='mt-5'>
                    <span className={` ${isFocused ? "opacity-0" : ""}`}>
                        Whether I'm refining a complex backend flow or crafting an elegant frontend animation, I bring a disciplined yet creative approach to development.
                    </span>
                    <span>
                        Over the past two years, I’ve worked on diverse domains including SaaS platforms, CRM dashboards, content management systems, and more — delivering both speed and reliability.
                    </span>

                </p>

                <p className='mt-5'>
                    <span className={`${isFocused ? "opacity-0" : ""}`}>
                        Beyond tech, I draw inspiration from the cosmos. Vedic astrology and astronomical exploration aren't just hobbies — they ground my curiosity and sharpen my pattern recognition. In my quieter hours,
                    </span>
                    <span>
                        I enjoy decoding ancient systems, studying planetary movements, and appreciating the harmony between logic and the mystical.
                    </span>

                </p>


            </div>


        </div>
    )
}

export default About
