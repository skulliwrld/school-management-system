import React from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function TopFied({title, path}) {
  return (
    <section>
        <div className="flex items-center space-x-4 mt-2">
            <FaRegArrowAltCircleRight className="text-xl" />
            <h2 className=" text-xl">Manage {title}</h2>
        </div>
        <div className="flex justify-end">
           <Button className="bg-purple-700 text-primary hover:bg-gray-700" >
           <Link href={path} className="flex items-center gap-2"><FaRegArrowAltCircleRight size={15} />Add New {title}</Link> 
        </Button>   
        </div>
    </section>
  )
}

export default TopFied