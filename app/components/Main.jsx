import React from 'react'

export default function MainHeader() {
  return (
    <div>
    <div className='lg:flex hidden justify-between mt-2 px-4'>
        <div className='flex flex-row'> 
            <div className='px-10'>Home</div>
            <div>Achivements</div>
        </div>
        <div className='text-2xl text-extrabold'>
            TheProgrammer
        </div>
        <div className='flex justify-between'>
            <div>Say Hi - </div>
            <div><a className='text-yellow-300' href='mailto:frankmakeba0@gmail.com'>frankmakeba0@gmail.com</a></div>
        </div>
    </div>
    </div>
  )
}
