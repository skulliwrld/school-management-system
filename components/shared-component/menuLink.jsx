"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function MenuLinks({items}) {

  const pathName = usePathname()
  return (
    <div className="border-warmGray-100">
        <Link href={items.path} className={`flex font-normal space-x-3 text:sm py-3 items-center hover:bg-secondary-200 rounded-full rounded-l-none ${pathName === items.path && 'bg-purple-600 rounded-full rounded-l-none text-white '}`}>
            <i className="text-sm pl-1 list-item">{items.icons}</i>
            <span className="text-xs"> {items.title}</span>
        </Link>
    </div>
  )
}

export default MenuLinks