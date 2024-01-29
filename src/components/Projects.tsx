import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-screen relative flex flex-col overflow-hidden 
    text-left md:flex-row max-w-full z-0 justify-evenly items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>PROJECTS...</h3>

      <div className='w-full absolute top-[30%] bg-[#9BB8CD]/80 left-0 h-[500px] skew-y-12'></div>
        
    </div>
  )
}

export default Projects