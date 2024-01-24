"use client"
import React from 'react'
import { Cursor ,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

import Image from 'next/image'

type Props = {}

export default function Hero({}: Props) {
    const[text,count]  = useTypewriter({
        words:[
            "hi , name is Yashasvi Shukla",
            "I'm a FRONT-END developer",
            "loves , to code and design",
        ],
        loop:true,
        delaySpeed: 1500,
    });

  return (
    <div className='h-screen flex flex-col space-y-10 items-center
     justify-center text-center overflow-hidden'> 
        <BackgroundCircles/>
        {/* <Image  className='relative rounded-full h-32 w-32 mx-auto object-cover' */}
         {/* width={400} height={400} src='/programmer.jpg'  alt='yash'/> */}


        <img className='relative rounded-full h-32 w-32 mx-auto
         object-cover top-20  translate-y-8' src='/clgStuDe.jpg' alt='yash'/>


        <div className='z-20'>
            <h1 className='text-sm uppercase text-[#F5F7F8]
             pb-2 tracking-[15px] translate-y-20 '>software engineer </h1>
            <h2 className='translate-y-20 bottom-6 text-4xl font-semibold px-10 text-[#3876BF]'>
                <span className='mr-3' >{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h2>

            <div className='pt-5 translate-y-40 text-[#43aade]'>
                <Link href= '#about'>   <button className='heroButton' >About</button>   </Link>
                <Link href= '#experience'> <button className='heroButton'>Experience</button>  </Link>
                <Link href= '#skills'> <button className='heroButton'>Skills</button> </Link>
                <Link href= '#projects'> <button className='heroButton'>Projects</button> </Link>
            </div>


        </div>
        
        

        {/* THIS IS THE CIRCLE FROM THE 3D PORTFOLIO PROJECT */}
        {/* <div className='flex flex-row  justify-start items-center mt-5 translate-x-100'>
            <div className=' w-5 h-5 rounded-full bg-[#915eff] '/>
        </div> */}
        
    </div>

    
  )
}