"use client"
import React from 'react'

type Props = {}

function Skills({}: Props) {
  return (
    <div className='h-screen flex realative flex-col text-center
    md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0
    mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills   {/*  absolute commenetedout */}
       </h3> 

       <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>
          Hover over for currently skill proficiency
       </h3>
    </div>
  )
}

export default Skills   

