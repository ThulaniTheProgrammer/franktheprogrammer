import React from 'react'

export default function About() {
  return (
    <div className='flex lg:px-40 px-2 w-full lg:flex-row flex-col  mt-20   lg:items-center'>
    <div classname=' rounded-full mb-10 mx-10 w:full lg:w-1/2'>
        <img height={200} width={200} className='rounded-lg text-center flex mx-10' src="data:image/jpeg;base64,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"/>
    </div>
    <div className='flex lg:w-1/2 w-full mx-10 flex-col'>
      <div className='mb-4 mt-10  text-4xl font-semibold'>
        About
      </div> 
      <div className='text-justify pr-10 pb-6'>
      Multi Award Winning Results-driven computer engineering professional with experience in software development, applicationdevelopment, IoT circuit interfacing, and design. Proven ability to develop innovative solutions to solvereal-world problems by integrating software and hardware.
      </div>
      <div className='mt-3'>

        <a className='bg-yellow-300  text-black font-semibold text-center px-2 py-2 rounded-lg' href="https://bywjfszqwytcvsftccvd.supabase.co/storage/v1/object/public/PDF/CV%20For%20Frank%20Makeba%20.pdf">Download CV</a>
      </div>
    </div>
    
</div>
  )
}
