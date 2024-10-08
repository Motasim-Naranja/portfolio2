import React from 'react'
import portfolio from '../assets/portfolioO.jpg'
import portfolio2 from '../assets/portfolio2.jpg'
import stream_ease from '../assets/stream ease.jpg'
import universal_stationary from '../assets/universal stationary.jpg'


const Projects = () => {
    return (
        <>
            <div className='text-xl bg-[#7434ff] py-12 '>
                <h2 className='text-3xl font-extrabold text-center text-white'>PROJECTS</h2>
                <p className='text-center  text-white ' >Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>

                <div className=' py-2 flex flex-col justify-around '>
                    
                    <div className='w-[90vw] mx-auto px-[30px] flex gap-16 bg-[#f3f2f2d0] py-12 rounded-[20px] backdrop-blur-lg border border-white shadow-white-lg'>
                        <img src={portfolio} alt="" className='rounded-[20px]  h-[40vh]' />
                        <div className='tracking-wider flex flex-col gap-3'>
                            <h4 className='font-extrabold text-2xl'>Portfolio</h4>
                            <p className='font-medium'>
                            I built this portfolio as a dashboard-style web app using React and Tailwind CSS. It’s fully responsive, with sections for my bio, skills, projects, and contact details. The sleek, modern design highlights my frontend development skills and showcases my ability to create dynamic, user-friendly interfaces.
                            </p>
                        </div>

                    </div>

                    <div className='w-[90vw] mx-auto px-[30px] flex gap-16 bg-[#f3f2f2d0] py-12 rounded-[20px] backdrop-blur-lg border border-white shadow-white-lg'>
                        <img src={portfolio} alt="" className='rounded-[20px]  h-[40vh]' />
                        <div className='tracking-wider flex flex-col gap-3'>
                            <h4 className='font-extrabold text-2xl'>Portfolio</h4>
                            <p className='font-medium'>
                            I built this portfolio as a dashboard-style web app using React and Tailwind CSS. It’s fully responsive, with sections for my bio, skills, projects, and contact details. The sleek, modern design highlights my frontend development skills and showcases my ability to create dynamic, user-friendly interfaces.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects
