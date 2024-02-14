"use client"

import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MdSearch } from 'react-icons/md';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

function TopFied({title, path}) {
  const searchParams = useSearchParams();
  const {replace} = useRouter()
  const pathName= usePathname();
 
  const handleSearch = useDebouncedCallback((e) =>{
    
  const params = new URLSearchParams(searchParams)
    params.set("page",e.target.value)
  if(e.target.value){
    e.target.value.length > 2 && params.set("q", e.target.value)
  }else{
    params.delete("q")
  }
  replace(`${pathName}?${params}`)
  })
  return (
    <section>
        <div className="flex items-center space-x-4 mt-2">
            <FaRegArrowAltCircleRight className="text-xl" />
            <h2 className=" text-xl">Manage {title}</h2>
        </div>
        <div className="flex justify-between items-center w-full">

            <div className=" bg-primary border rounded-lg flex items-center gap-2 px-3 py-2 full">
                <MdSearch className="font-bold text-black" size={30}/>
                <input type="text" placeholder={`search for ${title}`} onChange={handleSearch}className="bg-inherit w-full h-8 text-sm text-black text-start outline-none border py-4 px-3 rounded-lg"/>
            </div>

           <Button className="bg-purple-700 text-primary hover:bg-gray-700" >
           <Link href={path} className="flex items-center gap-2"><FaRegArrowAltCircleRight size={15} />Add New {title}</Link> 
        </Button>   
        </div>
    </section>
  )
}

export default TopFied