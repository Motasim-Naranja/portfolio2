import React from 'react';
import background from '../assets/common-bg.svg';
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <>
            <div style={{ position: 'relative' }}>

                <div
                    style={{
                        backgroundImage: `url(${background})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1,
                        opacity: 0.5,
                    }}
                ></div>


                <ul className='bg-white w-[4vw] h-[30vh] text-3xl flex flex-col justify-around items-center sticky  top-[20%]  left-3 z-10  '>
                    <li><a href="https://www.linkedin.com/in/motasim-ejaz-979342260/"><BsLinkedin /></a></li>
                    <li><a href="https://github.com/Motasim-Naranja"><BsGithub /></a></li>
                    <li><a href="https://www.instagram.com/motasim_naranja/"><BsInstagram /></a></li>
                    <li><a href=""><BsFacebook /></a></li>
                </ul>

                <div className='  text-xl z-10 flex flex-col gap-8 tracking-wider pb-[20%]'>
                    <h1 className=' px-[27%] font-bold text-2xl z-10'> Hey, I am 
                        <TypeAnimation
                            sequence={[
                                `" Motasim Naranja "`,
                                6000,
                                '',
                                1000
                            ]}
                            wrapper="span"
                            speed={20}
                            style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold', fontStyle:"italic" }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='px-[25%] font-semibold'>
                        Creative Frontend Developer, building sleek, responsive interfaces with React for modern web experiences.
                    </p>
                    <button className=' bg-[#e22323] text-white px-5 py-2 rounded-md mx-[45%] font-semibold'>Projects</button>
                </div>
            </div>
        </>
    );
};

export default Home;
