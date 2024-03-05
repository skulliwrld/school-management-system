import { addClassSection } from '@/lib/actions/classsection.action'
import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5" 

function ClassSectionForm({Classes,Teacher}) {
  return (
    <section>
         <form className="flex flex-col px-20 border" action={addClassSection}>
            <label className="text-center text-sm text-gray-500 py-2" >School Management System--- Class Section Field</label>
            <span className="flex items-center gap-2 my-2 border py-2 px-2"><IoAddCircleOutline  className="text-gray-500" size={20}/>Add Class Section</span>
            <div className="border">
            <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Section Name</label>
                    <input type="text" placeholder='' name="Name" className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none" />
                </span>

                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Nick Name</label>
                    <input type="text" placeholder=''  className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none" name='NickName'/>
                </span>

                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Class</label>
                    <select name="CLASS" id="" className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none">
                        <option>choose class</option>
                        {Classes.map((data) =>(
                            <option key={data._id} value={data._id}>{data.name}</option>
                        ))}
                    </select>
                </span>
                
                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Section Teachers</label>
                    <select name="sectionTeacher" id="" className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none">
                        <option>choose class teacher</option>
                        {Teacher.map((data) =>(
                            <option key={data._id} value={data._id}>{data.name}</option>
                        ))}
                    </select>
                </span>

                <div className="w-full flex items-center justify-center pb-3">
                    <button type="submit" className="w-full text-white bg-purple-700 py-2 md:mx-3 rounded-md font-bold hover:bg-slate-400 hover:text-black mt-3">Submit</button>
                </div>
            </div>     
        </form>
    </section>
  )
}

export default ClassSectionForm