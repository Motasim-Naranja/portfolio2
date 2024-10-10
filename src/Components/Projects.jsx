import React from 'react'
import portfolio from '../assets/portfolio.jpg'
import portfolio2 from '../assets/portfolio2.jpg'
import stream_ease from '../assets/stream ease.jpg'
import universal_stationary from '../assets/universal stationary.jpg'


const Projects = () => {
    return (
        <>
            <div className='text-xl bg-[#7434ff] py-12 '>
                <h2 className='text-3xl font-extrabold text-center text-white'>PROJECTS</h2>
                <p className='text-center  text-white ' >Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>

                <div className=' py-2 flex flex-col justify-around gap-5'>

                                    {/* portfolio*/}
                    <div className='w-[90vw] mx-auto px-[30px] flex gap-16 bg-[#f3f2f2d0] py-[100px] rounded-[20px] backdrop-blur-lg border border-white shadow-white-lg'>
                            <a href="https://portfolio-5om0e5jqg-motasim-naranjas-projects.vercel.app/" target='_blank' className='w-[200vw]'>
                            <img src={portfolio} alt="" className='rounded-[20px]  h-[40vh]' /></a>
                            <div className='tracking-wider flex flex-col gap-3'>
                            <h4 className='font-extrabold text-2xl'>Portfolio</h4>
                            <p className='font-medium'>
                                I built this portfolio as a dashboard-style web app using React and Tailwind CSS. It’s fully responsive, with sections for my bio, skills, projects, and contact details. The sleek, modern design highlights my frontend development skills and showcases my ability to create dynamic, user-friendly interfaces.
                            </p>
                            <a href="https://portfolio-5om0e5jqg-motasim-naranjas-projects.vercel.app/" target='_blank' className=''>
                            <button className=' bg-[#e22323] text-white py-2 rounded-lg w-[240px] font-semibold'>Live Demo</button>
                            </a>
                        </div>
                    </div>

                                    {/* portfolio 2 */}
                    <div className='w-[90vw] mx-auto px-[30px] flex gap-16 bg-[#f3f2f2d0] py-[100px] rounded-[20px] backdrop-blur-lg border border-white shadow-white-lg'>
                            <a href="https://portfolio-5om0e5jqg-motasim-naranjas-projects.vercel.app/" target='_blank' className='w-[290vw]'>
                            <img src={portfolio2} alt="" className='rounded-[20px]  h-[40vh]' /></a>
                            <div className='tracking-wider flex flex-col gap-3'>
                            <h4 className='font-extrabold text-2xl'>Portfolio 2</h4>
                            <p className='font-medium'>
                               This portfolio is designed as a clean, single-page website with a straightforward layout. It features a navbar at the top for easy navigation between sections like Home, About, Skills, and Projects. Built with React and Tailwind CSS, the design focuses on simplicity and responsiveness, ensuring a smooth user experience across devices. This project highlights my ability to create minimalistic, functional websites with organized content and efficient code.
                            </p>
                            <a href="https://portfolio2-nu-tawny.vercel.app/" target='_blank' className=''>
                            <button className=' bg-[#e22323] text-white py-2 rounded-lg w-[240px] font-semibold'>Live Demo</button>
                            </a>
                        </div>
                    </div>

                                    {/* universal stationary */}
                    <div className='w-[90vw] mx-auto px-[30px] flex gap-16 bg-[#f3f2f2d0] py-[100px] rounded-[20px] backdrop-blur-lg border border-white shadow-white-lg'>
                            <a href="https://portfolio-5om0e5jqg-motasim-naranjas-projects.vercel.app/" target='_blank' className='w-[290vw]'>
                            <img src={universal_stationary} alt="" className='rounded-[20px]  h-[40vh]' /></a>
                            <div className='tracking-wider flex flex-col gap-3'>
                            <h4 className='font-extrabold text-2xl'>Universal Stationary</h4>
                            <p className='font-medium'>
                               This portfolio is designed as a clean, single-page website with a straightforward layout. It features a navbar at the top for easy navigation between sections like Home, About, Skills, and Projects. Built with React and Tailwind CSS, the design focuses on simplicity and responsiveness, ensuring a smooth user experience across devices. This project highlights my ability to create minimalistic, functional websites with organized content and efficient code.
                            </p>
                            <a href="https://universal-stationary.vercel.app/" target='_blank' className=''>
                            <button className=' bg-[#e22323] text-white py-2 rounded-lg w-[240px] font-semibold'>Live Demo</button>
                            </a>
                        </div>
                    </div>

                                    {/* stream ease */}
                    <div className='w-[90vw] mx-auto px-[30px] flex gap-16 bg-[#f3f2f2d0] py-[100px] rounded-[20px] backdrop-blur-lg border border-white shadow-white-lg'>
                            <a href="https://portfolio-5om0e5jqg-motasim-naranjas-projects.vercel.app/" target='_blank' className='w-[290vw]'>
                            <img src={stream_ease} alt="" className='rounded-[20px]  h-[40vh]' /></a>
                            <div className='tracking-wider flex flex-col gap-3'>
                            <h4 className='font-extrabold text-2xl'>stream_ease</h4>
                            <p className='font-medium'>
                               This portfolio is designed as a clean, single-page website with a straightforward layout. It features a navbar at the top for easy navigation between sections like Home, About, Skills, and Projects. Built with React and Tailwind CSS, the design focuses on simplicity and responsiveness, ensuring a smooth user experience across devices. This project highlights my ability to create minimalistic, functional websites with organized content and efficient code.
                            </p>
                            <a href="https://stream-ease-motasim-naranjas-projects.vercel.app/" target='_blank' className=''>
                            <button className=' bg-[#e22323] text-white py-2 rounded-lg w-[240px] font-semibold'>Live Demo</button>
                            </a>
                        </div>
                    </div>

                    

                </div>
            </div>
        </>
    )
}

export default Projects
