import React from 'react'
import Link from 'next/link';
import '@/components/common-components/style.css'

const SectionTable = ({Data}) => {
  return (
   
    <div>
         {Data.length > 0 ?
         <table className="w-full px-2 mt-3  border">
            <thead className="border py-3">
                <tr className="text-md font-medium text-slate-500">
                    <td className=''>#</td>
                    <td className="">Section Name</td>
                    <td>Nick Name</td> 
                    <td>Teacher</td>
                    <td>Options</td>
                </tr>
            </thead>
            <tbody>
                {Data.map((data, index) =>(
                    <tr className="items-center text-sm" key={index}>
                        <td>
                            {data._id}
                        </td>
                        <td>
                            {data.Name}
                        </td>
                        <td>
                            {data.NickName}
                        </td>

                        <td>
                            {data.sectionTeacher.name}
                        </td>
                        <td className=" text-primary flex justify-center text-center space-x-2">
                                <Link href={`/class/manage-section/${data._id}/update`}className="bg-green-600 py-2 px-3 font-semibold rounded-lg text-end cursor-pointer">Edit</Link>

                                <form className="">
                                    <input type="hidden" name="id" value={data._id}/>
                                    <button className="bg-red-600 w-full py-2 text-start px-3 font-semibold rounded-lg cursor-pointer">Delete</button>
                                </form>

                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
        : 
            <div className="text-orange-500 text-center uppercase pt-52 text-2xl">
                session For this Class is Not avaliable at the moment
            </div>
        }
    </div>
  )
}

export default SectionTable