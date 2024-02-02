"use client"
import React from 'react'
import {motion} from "framer-motion"
import Tilt from "react-parallax-tilt"

type Props = {}

export default function About({}: Props) {
  return (
  
    <div className='h-screen flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center space-y-8 md:space-y-0'>
        
      <h3 className='text-[#424848] tracking-[20px] uppercase absolute top-24 text-2xl top-12 md:top-24 text-2xl'> About</h3>
        
      <Tilt><motion.img initial={{
          x:-200,
          opacity:0,
        }}
        transition={{
          duration:0.8
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
        src='/programmer.jpg'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-contain
        md:rounded-lg md:w-64 md:h-90 xl:w-[2800px] xl:h-[3000px] xl:rounded-xl'/></Tilt>

        <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold tracking-[12px] text-[#161A30]'>
            HERE IS A <span className='underline'> LITTLE </span>  BACKGROUND
          </h4>

          <p className='text-[#001B79]  text-capitalize tracking-[2px]'>
          Greetings,

          I am a dedicated web developer proficient in a comprehensive range of technologies 
          essential for modern web applications. My expertise encompasses React, JavaScript, 
          HTML, CSS, and Next.js, ensuring that I can craft intuitive and dynamic web interfaces 
          tailored to specific needs. Additionally, my proficiency extends to algorithmic problem-solving,
          having tackled numerous Data Structures and Algorithms questions on LeetCode using the Java programming language.

          Throughout my professional journey, I have successfully conceptualized and executed two distinct projects, 
          each showcasing my commitment to delivering quality and innovation. My passion for web development transcends
          mere coding; I take immense pleasure in constructing aesthetically pleasing web pages that not only function 
          seamlessly but also captivate users with their design elements.

          I am eager to leverage my skills and enthusiasm to contribute meaningfully to challenging web development endeavors, 
          ensuring excellence and user satisfaction at every step.
            
          </p>


        </div>
       

    </div>

  )
}