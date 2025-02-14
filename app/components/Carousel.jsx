'use client';
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Example() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={true}
      showIndicators={true}
      showThumbs={true}
      interval={10000}
   
    >
      <div className='lg:flex hidden flex-row mx-40'>
     <div className='h-1/3  rounded-xl w-1/3 bg-yellow-500  py-2'>
     <a href=''>
<div className='text-start h-40 '>ERP Software</div>
</a>
     </div>
  
     <div className='h-1/3 mx-2 rounded-xl w-1/3 bg-yellow-500  py-2'>
     <a href=''>
<div className='text-start h-40 '>ERP Software</div>
</a>
     </div>
  
     <div className='h-1/3 mx-2 rounded-xl w-1/3 bg-yellow-500  py-2'>
     <a href=''>
<div className='text-start h-40 '>ERP Software</div>
</a>
     </div>

      </div>
     
     
      <div>
     
      <div className='flex flex-row mx-40 my-3'>
     <div className='h-1/3  rounded-xl w-1/3 bg-yellow-500  py-2'>
     <a href=''>
<div className='text-start h-40 '>ERP Software</div>
</a>
     </div>
  
     <div className='h-1/3 mx-2 rounded-xl w-1/3 bg-yellow-500  py-2'>
     <a href=''>
<div className='text-start h-40 '>ERP Software</div>
</a>
     </div>
  
     <div className='h-1/3 mx-2 rounded-xl w-1/3 bg-yellow-500  py-2'>
     <a href=''>
<div className='text-start h-40 '>ERP Software</div>
</a>
     </div>

      </div>


      </div>
    </Carousel>
  );
}