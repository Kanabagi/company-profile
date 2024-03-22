"use client"

import { workProcess } from '@/constants/data'
import Image from 'next/image'
import React from 'react'

const Portofolio = () => {
  return (
    <>
      <section className='bg-hero bg-cover bg-center w-full h-[150px] md:h-[200px] flex items-center'>
        <span className='wrapper font-bold text-blue-800 text-[24px] sm:text-[30px] md:text-[40px]'>
          Our Recent Works
        </span>
      </section>

      <section className='wrapper flex justify-center items-center flex-wrap gap-[40px] py-[100px] md:py-0 md:pt-4 md:my-10'>
        <div className='w-[140px] h-[75px] sm:w-[200px] sm:h-[120px] md:w-[280px] md:h-[150px] bg-blue-800 rounded-[24px]'></div>
        <div className='w-[140px] h-[75px] sm:w-[200px] sm:h-[120px] md:w-[280px] md:h-[150px] bg-blue-800 rounded-[24px]'></div>
        <div className='w-[140px] h-[75px] sm:w-[200px] sm:h-[120px] md:w-[280px] md:h-[150px] bg-blue-800 rounded-[24px]'></div>
        <div className='w-[140px] h-[75px] sm:w-[200px] sm:h-[120px] md:w-[280px] md:h-[150px] bg-blue-800 rounded-[24px]'></div>
        <div className='w-[140px] h-[75px] sm:w-[200px] sm:h-[120px] md:w-[280px] md:h-[150px] bg-blue-800 rounded-[24px]'></div>
        <div className='w-[140px] h-[75px] sm:w-[200px] sm:h-[120px] md:w-[280px] md:h-[150px] bg-blue-800 rounded-[24px]'></div>
      </section>

      <section className='flex flex-col gap-10 min-h-screen mb-[200px] md:mb-[150px]'>
        <div className='wrapper'>
          <h1 className='md:text-[40px] text-[24px] sm:text-[30px] text-center font-bold'>
            <span className='text-blue-800'>Our</span> Work Process
          </h1>
        </div>

        <div className='bg-blue-800 w-full sm:py-0 sm:h-[500px] py-6 md:pb-0 flex items-center justify-center gap-6 md:gap-[80px]'>
          <div className='wrapper flex sm:flex-row flex-col items-center justify-center md:gap-[80px] gap-6'>
            {workProcess.map((work) => (
              <div key={work.name} className="group flex flex-col items-center gap-4 after:content-['-----------'] after:text-white">
                <div className='p-6 bg-white rounded-full'>
                  <Image src={work.iconUrl} alt='' width={80} height={80} className='sm:w-[80px] w-[60px] group-hover:rotate-12' />
                </div>

                <p className='font-medium text-white text-[16px] md:text-[20px]'>
                  {work.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portofolio