"use client"

import { navLinks } from '@/constants/data'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import SideNav from './SideNav'
import NavLinks from './NavLinks'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className='border-b w-full bg-gray-50 fixed z-10'>
      <div className='wrapper flex items-center justify-between'>
        <Link href="/" className=''>
          <Image src="/assets/images/Logos.svg" alt='' width={160} height={160} />
        </Link>
        <div className='flex md:hidden'>
          <SideNav />
        </div>

        <div className='md:flex hidden'>
          <NavLinks />
        </div>
      </div>
    </header>
  )
}

export default Navbar