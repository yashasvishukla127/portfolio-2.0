"use client"
import React from 'react'
import {motion} from 'framer-motion'
import css from '../assets/logos/css.png';
import git from '../assets/logos/github-logo.png';
import html from '../assets/logos/html-file-format.png';
import java from '../assets/logos/java.png';
import javascript from '../assets/logos/javascript.png';
import next from '../assets/logos/nextjs.512x309.png';
import ts from '../assets/logos/typescript.png';
import vs from '../assets/logos/visual-studio.png';
import react from '../assets/logos/react.png'
type Props = {directionLeft?: boolean;
};

function Skill7({directionLeft}: Props) {   //1 change for skill
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img initial={{
            x: directionLeft ? -200 :200,
            opacity:0,
        }}transition={{
            duration:0.8
          }}
          whileInView={{
            x:0,
            opacity:1,
          }}
          src={ts.src}  // there is an error of importing image which have been solved by using .src
          alt='git'
          className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
          filter group-hover:bg-blue-200 transition duration-300 ease-in-out'
        />

        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-700 ease-in-out
        group-hover:bg-gray-200 rounded-full h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>90%</p>
            </div>
        </div>

        

    </div>
  )
}

export default Skill7  // 2 change for skill