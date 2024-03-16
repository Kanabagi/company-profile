"use client"

import { navLinks } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className='p-4 flex justify-between'>
      <h1>Navbar</h1>

      <ul className='flex gap-4'>
        {navLinks.map((nav) => {
          const isActive = pathname === nav.path;

          return (
            <li key={nav.name} className={`${isActive && '!text-blue-800'} text-gray-400`}>
              <Link href={nav.path}>
                {nav.name}
              </Link>
            </li>
          )
        }
        )}
      </ul>
    </div>
  )
}

export default Navbar