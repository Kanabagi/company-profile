import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { contactImg } from '@/constants/data'
import Image from 'next/image'
import Link from 'next/link'

const ContactUs = () => {
  return (
    <>
      <section className='bg-hero bg-cover bg-center w-full h-[150px] md:h-[200px] flex items-center'>
        <span className='wrapper font-bold text-blue-800 text-[24px] sm:text-[30px] md:text-[40px]'>
          Contact Us
        </span>
      </section>

      <section className='wrapper flex flex-col md:flex-row gap-10 w-full py-10 mb-[150px] md:mb-[200px]'>
        <div className='flex flex-col gap-4 w-full'>
          <div className='flex flex-row md:flex-col gap-2 md:gap-4'>
            <Input type='text' placeholder='Name' className='border-0 bg-[#f0f0f0] outline-offset-0 placeholder:text-gray-400 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full px-6 h-[54px] text-[16px]' />
            <Input type='email' placeholder='Email' className='border-0 bg-[#f0f0f0] outline-offset-0 placeholder:text-gray-400 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full px-6 h-[54px] text-[16px]' />
          </div>
          <Textarea placeholder='Message' className='border-0 bg-[#f0f0f0] outline-offset-0 placeholder:text-gray-400 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-[24px] px-6 py-4 text-[16px] h-[150px]' />
          <Button className='bg-blue-800 rounded-full h-[54px] hover:bg-blue-900'>
            Submit
          </Button>
        </div>

        <div className='w-full flex flex-col gap-4'>
          <h1 className='font-bold text-[24px] sm:text-[30px] md:text-[40px]'>
            <span className='text-blue-800'>Address</span> Info
          </h1>

          <p className='text-[16px] md:text-[20px]'>
            Office 24 Building, block 112-A Jl. Kahuripan Kav. 16-19 Tokyo, Japan.
          </p>

          <div className='flex md:flex-col gap-6 md:gap-4 flex-wrap'>
            {contactImg.map((contact) => (
              <Link href={contact.path} className='flex gap-2 md:gap-4 group' target='blank'>
                <Image src={contact.iconUrl} alt='' width={28} height={28} className='w-[20px] h-[20px] md:w-[28px] md:h-[28px] group-hover:rotate-12' />
                <p className='text-[16px] md:text-[20px] group-hover:text-blue-800'>{contact.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs