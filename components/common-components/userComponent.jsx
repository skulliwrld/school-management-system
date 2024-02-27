import React from 'react'
import Image from 'next/image'
import { IoLogOut } from 'react-icons/io5'
import Link from 'next/link'
import { Button } from '../ui/button'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'


const UserComponent = () => {
  return (
    <>
    <section className="flex justify-between items-center w-full border-b p-3 text-sm">
        <div className="flex items-center gap-2">
            <Image src={"/assets/images/default.png"} width={30} height={20}/>
            <span>Admin</span>
        </div>
            
        <Link href="/" className="flex items-center gap-2">
            Logout
            <IoLogOut size={20} />
        </Link>
        
    </section>
    <div className="py-4 flex px-3 items-center justify-between border">
        <div className="flex items-center space-x-4 mt-2">
            <FaRegArrowAltCircleRight className="text-xl" />
            <h2 className=" text-xl">Manage Class Routine</h2>
        </div>
        <Button className="bg-purple-700 text-primary hover:bg-gray-700" >
           <Link href="/classroutine/add-classroutine" className="flex items-center gap-2"><FaRegArrowAltCircleRight size={15} />Add New Class Routine</Link> 
        </Button>   
    </div>
    </>
  )
}

export default UserComponent