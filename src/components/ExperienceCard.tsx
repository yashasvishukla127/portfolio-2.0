"use client"
import React from 'react'
import Image from 'next/image'

import htm from '../assets/html.png';
import js from '../assets/js.png';
import react from '../assets/react.png';

import laurels2 from '../assets/laurels2.jpg';  // error was solved by using 
                                                // " use client "
import {motion} from 'framer-motion'
import css from 'styled-jsx/css';

type Props = {}

function ExperienceCard({}: Props) {
  return(
  <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
   w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#EEF5FF] hover:opacity-100 opacity-70
   cursor-pointer transition-opacity duration-200 overflow-hidden
  '>
    <motion.div initial={{
        x:-200,
        opacity:0,
      }}
      transition={{
        duration:0.8
      }}
      whileInView={{
        x:0,
        opacity:1,
      }}>
      <Image className='w-32 h-32 rounded-full object-cover object-center
      md:rounded-full xl:w-[200px] xl:h-[200px]' 
      src={laurels2}
      alt="chemist" />
    </motion.div>

    <div className='px-0 md:px-10'>
      <h4 className='font-bold text-2xl mt-1'> MODERN RESTAURANT LANDING PAGE </h4>
      <div className='flex space-x-2 my-2'>
        <Image className='h-10 w-10 rounded-full'
          src={htm} alt={'htm'} />
        <Image className='h-10 w-10 rounded-full'
          src={js} alt={'htm'} />
        <Image className='h-10 w-10 rounded-full'
          src={react} alt={'htm'} />
      </div>
      <p> oct/23 - dec/23 </p>

      <ul className='list-disc space-y-2 text-lg '>
        <li>did use of react</li>
        <li>did use of tailwind</li>
        <li> did use of javascript</li>
      </ul>
    </div>
     
     
     
  </article>

  
    
  )  
}

export default ExperienceCard