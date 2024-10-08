import React from 'react'
import profile from '../assets/profile 2.png'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
      <div className='hidden sm:flex justify-between px-8 py-4 bg-[#7843E9] text-white font-bold items-center text-xl'>
        <ul className='flex gap-3 items-center'>
          <li><img src={profile} alt="" className='w-[60px] rounded-[50%]' /></li>
          <li className='md:hidden'>Motasim Ejaz</li>
        </ul>
        <ul className='flex gap-7'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>


      <ul className='block sm:hidden bg-[#7843E9] w-[4vw] h-[30vh] text-3xl flex flex-col justify-around items-center sticky top-[20%] left-3 z-10'>
        <li><a href="https://www.linkedin.com/in/motasim-ejaz-979342260/"><BsLinkedin /></a></li>
        <li><a href="https://github.com/Motasim-Naranja"><BsGithub /></a></li>
        <li><a href="https://www.instagram.com/motasim_naranja/"><BsInstagram /></a></li>
        <li><a href=""><BsFacebook/></a></li>
      </ul>
    </>
  )
}

export default Navbar