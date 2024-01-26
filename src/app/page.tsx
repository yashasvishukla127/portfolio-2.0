"use client"
import Image from 'next/image'
import Head from 'next/head'
import styles from "../styles/Home.module.css"    
import Header from '../components/Header'
import Hero from '@/components/Hero'

import night2 from '../assets/night2.jpg'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className=' object-contain bg-cover text-slate-400 h-screen
   snap-y snap-mandatory overflow-scroll z-0'>
      
      <Head>
          <title> yash portfolio</title>
      </Head>
      
      <Header/>  

      
  
     <section id='hero' className='snap-start'>
        <Hero/>
     </section>

     <section id='about' className='snap-center'>
        <About/>
     </section>
      
      <section id='experience' className='snap-center'>
        <WorkExperience/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      <section>
        
        
        
      </section>
       {/*skills */}
      {/* projects */}
      {/* contact */}

    </div>
  )
}


