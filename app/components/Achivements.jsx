import React from 'react'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
export default function Achivements() {
  return (
    <div className='flex flex-col mt-5 px-10 lg:px-40'>
        <div className='text-4xl py-4 mt-8'>Achivements</div>
       <div>
       <div className='flex mt-5 flex-row justify-between'>
        <div className='lg:text-2xl text-sm pr-4'>2022 UNESCO India Africa HACKATHON Gold Medalist</div>
        <div className=' text-yellow-200 text-4xl mb-4'><a href='https://x.com/ZBCNewsonline/status/1596437454789447684/'>< BsFillArrowUpRightCircleFill /></a></div>
        </div>
        <div className='border-2 border-yellow-500 '>
            {/* Content goes here */}
        </div>
       </div>

       <div>
       <div className='flex mt-5 flex-row justify-between'>
        <div className='lg:text-2xl text-sm'>2023 Presidential Award Winner</div>
        <div className=' text-yellow-200 text-4xl mb-4'><a href='https://zchpc.ac.zw/2023/04/17/presidential-awards-ceremony-of-students-from-institutions-of-higher-and-tertiary-education/'>< BsFillArrowUpRightCircleFill /></a></div>
        </div>
        <div className='border-2 border-yellow-500 '>
            {/* Content goes here */}
        </div>
       </div>

       <div>
       <div className='flex flex-row mt-5 justify-between'>
        <div className='lg:text-2xl text-sm'>2024 ZITF Young Innovators Forum Finalist</div>
        <div className=' text-yellow-200 text-4xl mb-4'><a href='https://www.linkedin.com/posts/frank-makeba-251ba1195_hurudzaai-younginnovators-agritech-activity-7191129716798484480-5SA8?utm_source=share&utm_medium=member_desktop'>< BsFillArrowUpRightCircleFill /></a></div>
        </div>
        <div className='border-2 border-yellow-500 '>
            {/* Content goes here */}
        </div>
       </div>

    </div>
  )
}
