import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import NavLinks from './NavLinks'



const SideNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Image src="/assets/icons/menus.png" alt='' width={26} height={26} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className='gap-2'>
            <SheetTitle>
              <Image src="/assets/images/Logos.svg" alt='' width={140} height={68} />
            </SheetTitle>

            <Separator />

            <SheetDescription>
              <NavLinks />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default SideNav