"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdOutlineStarRate } from "react-icons/md";




function MenuLinks({items}) {

  const pathName = usePathname()

  const hasBars = items.contain.length > 0
  return (
    <div className="border-warmGray-100">
        <Link href={items.path} className={`flex font-normal space-x-3 text:sm py-3 items-center hover:bg-secondary-200 rounded-full rounded-l-none ${pathName === items.path && 'bg-purple-600 rounded-full rounded-l-none w-56 text-white '}`}>
            <i className="text-sm pl-1 list-item">{items.icons}</i>
            <span className="text-xs"> {items.title}</span>
            {hasBars ? (
                <IoIosArrowDown size={6}/>
            ):null}
        </Link>
    </div>
  )
}

export default MenuLinks


export function SecondLink({items}) {

  const pathName = usePathname()
  return (
    <div className="border-warmGray-100 ">
        <Link href={items.path} className={`flex font-normal space-x-3 text:sm py-3 items-center hover:bg-secondary-200 rounded-full rounded-l-none ${pathName === items.path && 'bg-purple-600 rounded-full rounded-l-none border text-white '}`}>
            <i className="text-sm items-center flex gap-2"><MdOutlineStarRate/><span className="text-xs"> {items.title}</span></i>
            
        </Link>
    </div>
  )
}