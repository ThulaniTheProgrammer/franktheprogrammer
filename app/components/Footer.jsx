import React from 'react'

export default function Footer() {
  return (
    <div className='mx-10 py-5'>
          <div className='border-2 border-yellow-500 '>
            {/* Content goes here */}
        </div>
<div className='flex flex-row text-white justify-center lg:justify-between'>
    <div className='flex flex-row justify-center'>
    <div className='text-sm'><a href='https://github.com/ThulaniTheProgrammer/'>Github</a></div>
    <div className='text-sm  px-10'><a href='https://www.linkedin.com/in/frank-makeba-251ba1195'>Linkedin</a></div>
    <div className='text-sm'><a href='mailto: frankmakeba0@gmail.com'>Gmail</a></div>
    </div>
    <div className='text-sm lg:flex hidden '> 2024 All rights reserved.</div>
  


</div>
    </div>
  )
}
