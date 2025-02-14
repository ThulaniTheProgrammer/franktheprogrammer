'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';

export default function Toptext() {
  return (
    <div className='flex justify-center w-full flex-col items-center'>
        <div className='text-4xl font-bold pt-10'>
                                    <Typewriter
                                        options={{
                                            strings: ["Hi, I'm"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                            </div>
        <div className='text-4xl font-bold text-yellow-300' >
            Frank Makeba
        </div>
        <div className='text-4xl font-bold'>
            Computer Engineer
        </div>
    </div>
  )
}
