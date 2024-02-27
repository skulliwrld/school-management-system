import React from 'react'
import '@/components/common-components/style.css'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { deleteSubject } from '@/lib/actions/subject.action';

  
  

const SubjectTable = ({sub}) => {
   // const teachers = Array[Data.assignedTeacher]
  return (
    <div className="w-full">
        <table className="w-full px-2 mt-3  border">
            <thead className="border py-3">
                <tr className="text-md font-medium text-slate-500">
                    <td className=''>Class</td>
                    <td className="">Subject</td>
                    <td>Teacher</td> 
                    <td>Options</td>
                </tr>
            </thead>
            <tbody>
                {sub.map((data, index) =>(
                    <tr className="items-center text-sm" key={index}>
                        <td>
                            {data.class.name}
                        </td>
                        <td>
                            {data.Name}
                        </td>
                        <td>
                            {data.assignedTeacher.name}
                        </td>
                        <td>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="bg-blue-500 py-3 px-2 text-primary text">Action</DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-blue-300 text-primary border border-black flex flex-col justify-center text-center">
                                <Link href={`/subject/${data._id}/update`}>
                                    <DropdownMenuLabel className="bg-green-600 py-2 px-3 font-semibold rounded-lg text-end cursor-pointer">Edit</DropdownMenuLabel>
                                </Link>
                                <DropdownMenuSeparator />
                                <form action={deleteSubject} className="w-full">
                                    <input type="hidden" name="id" value={data._id}/>
                                    <button className="bg-red-600 w-full py-2 text-start px-3 font-semibold rounded-lg cursor-pointer " >Delete</button>
                                </form>
                                
                            </DropdownMenuContent>
                        </DropdownMenu>

                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
}

export default SubjectTable