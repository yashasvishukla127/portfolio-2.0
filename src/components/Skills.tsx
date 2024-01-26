"use client"
import React from 'react'
import {motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
     
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
      }} className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
         <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Skills   
         </h3> 

         {/* i did spelling mistake of relative in <div> 👆 and there was an absolute 
         erro in <h3> 👇 i did codium search which helped me find the bug */}

         <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>
            Hover over for currently skill proficiency
         </h3> 
         <div className='grid grid-cols-3 gap-5 justify-center items-center text-center'>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>

          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>

          <Skill/>
        </div>
      </motion.div>

      
    
  )
}

export default Skills   