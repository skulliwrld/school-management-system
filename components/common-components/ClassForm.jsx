import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5" 

function ClassForm({Teacher,handleAdd}) {
  return (
    <section>
         <form className="flex flex-col px-20 border" action={handleAdd}>
            <label className="text-center text-sm text-gray-500 py-2" >School Management System--- Classes</label>
            <span className="flex items-center gap-2 my-2 border py-2 px-2"><IoAddCircleOutline  className="text-gray-500" size={20}/>Add Classes</span>
            <div className="border">
            <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Name</label>
                    <input type="text" placeholder='' name="Name" className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none" />
                </span>

                <span name="number" className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Numeric Id</label>
                    <input type="text" placeholder='' className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none"/>
                </span>
                
                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Assigned Teachers</label>
                    <select name="assignedTeacher" id="" className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none">
                        <option>choose class teacher</option>
                        {Teacher.map((data) =>(
                            <option key={data._id} value={data.name}>{data.name}</option>
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

export default ClassForm