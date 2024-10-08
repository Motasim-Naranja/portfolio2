import React from 'react'
import { BiMessageAdd } from 'react-icons/bi'
import { BsMailbox } from 'react-icons/bs'
import { FcContacts } from 'react-icons/fc'
import { GrContact } from 'react-icons/gr'

const About = () => {
    return (
        <>
            <div className='bg-[#ebebeb] flex flex-col gap-5 py-12'>
                <h2 className='text-center font-extrabold text-3xl tracking-wider'>ABOUT ME</h2>
                <p className='text-xl text-center'>"Discover more about me, what I do, and my current skills, primarily in programming and technology."</p>
                <div className='flex pt-6'>
                    <div className='w-[45vw] px-[5%] flex flex-col gap-6 tracking-wide text-xl text-left'>
                        <h3 className='font-bold text-2xl '>Get to know me!</h3>
                        <p className=''>
                            "I'm a Frontend Developer focused on building and managing the user interface of websites and web applications to contribute to a product's overall success. Explore my work in the Projects section.

                            I also enjoy sharing what I've learned in web development over the years to help others in the developer community. Connect with me on LinkedIn and Instagram, where I regularly post web development and programming content.

                            I'm open to job opportunities where I can contribute, grow, and continue learning. If you have an opportunity that fits my skills and experience, don't hesitate to reach out!"
                        </p>
                        <button className='bg-[#7843E9] rounded w-[150px] py-3 font-bold text-white mx-[auto] text-sm'> CONTACT </button>
                    </div>
                    <div className='w-[45vw] px-[5%] flex flex-col gap-6 tracking-wide text-left text-lg'>
                        <h3 className='font-bold text-2xl ' >My Skills</h3>
                        <div className='grid  gap-4'>
                            <div className=' inline bg-slate-300 py-2 w-[90px] rounded text-center'>HTML</div>
                            <div className=' inline bg-slate-300 py-2 w-[70px] rounded text-center'>CSS</div>
                            <div className=' inline bg-slate-300 py-2 w-[130px] rounded text-center'>JAVA SCRIPT</div>
                            <div className=' inline bg-slate-300 py-2 w-[75px] rounded text-center'>REACT</div>
                            <div className=' inline bg-slate-300 py-2 w-[70px] rounded text-center'>GIT</div>
                            <div className=' inline bg-slate-300 py-2 w-[110px] rounded text-center'>GIT HUB</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About