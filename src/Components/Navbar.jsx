import React from 'react'
import profile from '../assets/profile 2.png'

const Navbar = () => {
  return (
    <>
        <div className='flex justify-between px-8 py-4 bg-[#7843E9] text-white font-bold items-center text-xl  '>
            <ul className='flex gap-3 items-center'>
                <li><img src={profile} alt="" className='w-[60px] rounded-[50%]'/></li>
                <li>Motasim Ejaz</li>
            </ul>
            <ul className='flex gap-7'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </>
  )
}

export default Navbar