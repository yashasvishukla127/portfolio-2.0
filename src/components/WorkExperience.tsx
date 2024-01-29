import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import HorizontalScroll from 'react-scroll-horizontal'

type Props = {}

function WorkExperience({}: Props) {
  const child = {width:`300em`,height:`100%`}
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
      }} 
          
      className='h-screen flex relative overflow-hidden flex-col
     text-left md:flex-row max-w-full px-10 justify-evenly
      mx-auto items-center'>
        <h3 className='text-4xl font-semibold absolute top-24 tracking-[12px] text-[#161A30]'>PROJECTS</h3>
      
        
      <HorizontalScroll>

      
        <div style={child}   className='w-full flex absolute top-[30%] space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <motion.div
              className='flex-none'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExperienceCard />
            </motion.div>

            <motion.div
              className='flex-none'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExperienceCard />
            </motion.div>

            <motion.div
              className='flex-none'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExperienceCard />
            </motion.div>
             
        </div>
      </HorizontalScroll>


    </motion.div>
  )
}

export default WorkExperience