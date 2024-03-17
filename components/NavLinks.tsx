import { navLinks } from '@/constants/data'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = () => {
    const pathname = usePathname()

    return (
    <ul className='flex gap-6 md:gap-8 md:flex-row flex-col'>
        {navLinks.map((item) => {
            const navActive = pathname === item.path;

            return (
                <li key={item.name}
                className={`${navActive && '!text-blue-800'} text-gray-400 text-[16px] font-medium group`}>
                    <Link href={item.path} className='group-hover:text-blue-800 flex gap-4 md:gap-0'>
                        <div className={`${navActive && '!bg-blue-800'} bg-gray-400 md:hidden flex p-2 rounded-full group-hover:bg-blue-800`}>
                            <Image src={item.iconUrl} alt='' width={26} height={26}/>
                        </div>
                        <span className='pt-[11px] md:pt-0'>{item.name}</span>
                    </Link>
                </li>
            )
        })}
    </ul>
    )
}

export default NavLinks