import React from 'react'

type Props = {}

const Workcard = (props: Props) => {
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>   
        <div>
            <h3 className='capitalize font-bold text-2xl text-black'> Intern <span className='text-3xl text-violet-800'>@slashMark</span> </h3>
            <span className='capitalize  font-semibold text-black/75'>feb24 - may24</span>
            <p className='font-medium w-full text-2xl text-indigo-950'> i as an intern worked on  react frontend
            technologies built projects on varius problem . Problems were very unique and
            hard to solve. lorem ipsum dorem lorem 
            </p>
        </div>

    </li>
  )
}

export default Workcard

