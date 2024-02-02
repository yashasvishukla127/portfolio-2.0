"use client"
import React from 'react'
import { Cursor ,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

import Image from 'next/image'

type Props = {}

const Hero = (props: Props) => {
    const[text,count]  = useTypewriter({
        words:[
            "hello i am Yashasvi Shukla",
            "I'm a FRONT-END developer,",
            " software developer",
            "loves , to code and design",
        ],
        loop:true,
        delaySpeed: 100,
    });


  return (
    <div className='h-screen flex flex-col space-y-10 items-center
     justify-center text-center overflow-hidden'> 
        <h1 className='uppercase text-3xl text-[#0f0f0f] pb-2 tracking-[15px] translate-y-20 relative top-[-20px]'>
            Software developer
        </h1>

        <BackgroundCircles/>
        {/* <Image  className='relative rounded-full h-32 w-32 mx-auto object-cover' */}
         {/* width={400} height={400} src='/programmer.jpg'  alt='yash'/> */}

        
        <img className='relative rounded-full h-32 w-32 mx-auto
         object-cover top-20  translate-y-8' src='/clgStuDe.jpg' alt='yash'/>    


        <div className='z-20'>
            
            <h2 className='translate-y-20 bottom-6 text-4xl font-semibold px-10 text-[#667b92]'>
                <span className='mr-3' >{text}</span>
                <Cursor cursorColor= " #3876BF" />
            </h2>

            <div className='pt-5 translate-y-40 text-[#8bb2c5]'>
                <Link href= '#about'>   <button className='heroButton' >About</button>   </Link>
                <Link href= '#experience'> <button className='heroButton'>Experience</button>  </Link>
                <Link href= '#skills'> <button className='heroButton'>Skills</button> </Link>
                <Link href= '#projects'> <button className='heroButton'>Projects</button> </Link>
            </div>
            


        </div>
        
        


        
    </div>
  )
}

export default Hero

{/* 
            <h1 className=' uppercase text-2xl text-[#0f0f0f]
             pb-2 tracking-[15px] translate-y-20 '>software engineer </h1> */}

        {/* THIS IS THE CIRCLE FROM THE 3D PORTFOLIO PROJECT */}
        {/* <div className='flex flex-row  justify-start items-center mt-5 translate-x-100'>
            <div className=' w-5 h-5 rounded-full bg-[#915eff] '/>
        </div> */}






        
        // export default function Hero({}: Props) {
            //     const[text,count]  = useTypewriter({
            //         words:[
            //             "hello i am Yashasvi Shukla",
            //             "I'm a FRONT-END developer,",
            //             " software developer",
            //             "loves , to code and design",
            //         ],
            //         loop:true,
            //         delaySpeed: 100,
            //     });
            
            //   return (
            //     <div className='h-screen flex flex-col space-y-10 items-center
            //      justify-center text-center overflow-hidden'> 
            //         <h1 className='uppercase text-3xl text-[#0f0f0f] pb-2 tracking-[15px] translate-y-20 relative top-[-20px]'>
            //             Software developer
            //         </h1>
            
            //         <BackgroundCircles/>
            //         {/* <Image  className='relative rounded-full h-32 w-32 mx-auto object-cover' */}
            //          {/* width={400} height={400} src='/programmer.jpg'  alt='yash'/> */}
            
                    
            //         <img className='relative rounded-full h-32 w-32 mx-auto
            //          object-cover top-20  translate-y-8' src='/clgStuDe.jpg' alt='yash'/>    
            
            
            //         <div className='z-20'>
                        
            //             <h2 className='translate-y-20 bottom-6 text-4xl font-semibold px-10 text-[#667b92]'>
            //                 <span className='mr-3' >{text}</span>
            //                 <Cursor cursorColor= " #3876BF" />
            //             </h2>
            
            //             <div className='pt-5 translate-y-40 text-[#8bb2c5]'>
            //                 <Link href= '#about'>   <button className='heroButton' >About</button>   </Link>
            //                 <Link href= '#experience'> <button className='heroButton'>Experience</button>  </Link>
            //                 <Link href= '#skills'> <button className='heroButton'>Skills</button> </Link>
            //                 <Link href= '#projects'> <button className='heroButton'>Projects</button> </Link>
            //             </div>
                        
            
            
            //         </div>
                    
                    
            
            
                    
            //     </div>
            
                
            //   )
            // }