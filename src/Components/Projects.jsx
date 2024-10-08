import React from 'react'
import portfolio from '../assets/portfolioO.jpg'
import portfolio2 from '../assets/portfolio2.jpg'
import stream_ease from '../assets/stream ease.jpg'
import universal_stationary from '../assets/universal stationary.jpg'


const Projects = () => {
    return (
        <>
            <div className='h-[100vh] text-xl bg-[#f8f8f8] py-12 '>
                <h2 className='text-3xl font-extrabold text-center'>PROJECTS</h2>
                <p className='text-center text-gray-600' >Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>

                <div className='bg-black py-2 flex'>
                    <div className='w-[90vw] mx-[auto] px-[30px]  flex gap-16 bg-slate-400 py-12'>

                        <img src={portfolio} alt="" className='rounded-[20px]  h-[40vh]' />
                        <div className='tracking-wider'>
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
