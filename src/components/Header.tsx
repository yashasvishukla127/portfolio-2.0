"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
  
    <header className=' sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div 
        initial={{
            x:-500,
            opacity:0,
            scale:0.2
        }}
        animate={{
          x:0,
          opacity:1,
          scale:.8
        }}

        transition={{
          duration:1.3
        }}
        
        className='flex flex-row items-center '> 
          


          <a href='https://github.com/yashasvishukla127' target='_blank' rel='noopener noreferrer'>

            <SocialIcon url='https://github.com/'
            fgColor='gray' bgColor='transparent'
            className="hover:scale-150 hover:bg-blue-100 transform transition-transform duration-300"/>
          </a>
            <SocialIcon url='https://www.linkedin.com'
            fgColor='purple' bgColor='transparent'
            className="hover:scale-150 transform transition-transform duration-300"/>

            <SocialIcon url='https://www.twitter.com'
            fgColor='blue' bgColor='transparent'
            className="hover:scale-150 hover:bg-[#cbd5e1] transform transition-transform duration-300"/>

            <SocialIcon url='https://www.youtube.com'
            fgColor='red' bgColor='transparent' 
            className="hover:scale-150 transform transition-transform duration-300"/>

      </motion.div>

      <motion.div
        initial={{
          x:500,
          opacity:0,
          scale:0.2
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1
          
        }}
        
        transition={{
          duration:1.3
        }}

        className='flex flex-row items-center text-gray-400 cursor-pointer hover:scale-110 
        hover:bg-gradient-to-r hover:from-gray-300 hover:via-gray-600'>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
            
            

            <p className="uppercase hidden md:inline-flex text-sm
             text-gray-400  ">Get In Touch
            </p>

              

      </motion.div>

  

    </header>
  
  )
}

export default Header