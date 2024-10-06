import React from 'react';
import background from '../assets/common-bg.svg'; 
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          height: '100vh', 
        }}
      >

        
            <ul className='bg-white w-[4vw] h-[30vh] text-3xl flex flex-col justify-around items-center sticky top-[20%] left-3'>
                <li><a href="https://www.linkedin.com/in/motasim-ejaz-979342260/"><BsLinkedin/></a></li>
                <li><a href="https://github.com/Motasim-Naranja"><BsGithub/></a></li>
                <li><a href="https://www.instagram.com/motasim_naranja/"><BsInstagram/></a></li>
                <li><a href=""></a><BsFacebook/></li>
            </ul>
        
        
      </div>
    </>
  );
};

export default Home;
