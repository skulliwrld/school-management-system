import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5" 
import { addRoutine } from '@/lib/actions/classroutine.action'

function ClassRoutineForm({Class,Subject, Days}) {
  return (
    <section>
         <form className="flex flex-col px-20 border" action={addRoutine}>
            <label className="text-center text-sm text-gray-500 py-2" >School Management System--- Classes Routines</label>
            <span className="flex items-center gap-2 my-2 border py-2 px-2"><IoAddCircleOutline  className="text-gray-500" size={20}/>Add Class Routine</span>
            <div className="border">
            <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Class</label>
                    <select name="Class" id="" className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none">
                        <option>choose class</option>
                        {Class.map((data) =>(
                            <option key={data._id} value={data._id}>{data.name}</option>
                        ))}
                    </select>
                    
                </span>

                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Subject</label>
                    <select name="Subject" id="" className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none">
                        <option>select class first</option>
                        {Subject.map((data) =>(
                            <option key={data._id} value={data._id}>{data.Name}</option>
                        ))}
                    </select>
                </span>
                
                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Day</label>
                    <select name="Day" id="" className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none">
                        <option>choose day of the week</option>
                        {Days.map((data) =>(
                            <option key={data._id} value={data._id}>{data.name}</option>
                        ))}
                    </select>
                </span>
                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5 w-full relative">
                    <label className="text-sm font-medium flex justify-center absolute left-28">Starting Time</label>
                    <div className="flex flex-col w-full items-center justify-center">
                            <input type="text" placeholder=''  className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none" name='startingTime'/>
                        <select name="startPeriod" id="" className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none">
                            <option>am</option>
                            <option>pm</option>
                        </select>
                    </div>
                  
                </span>

                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5 w-full relative">
                    <label className="text-sm font-medium flex justify-center absolute left-28">Ending Time</label>
                    <div className="flex flex-col w-full items-center justify-center">
                            <input type="text" placeholder=''  className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none" name='endingTime'/>
                        <select name="endPeriod"  className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none">
                            <option>Am</option>
                            <option>Pm</option>
                        </select>
                    </div>
                  
                </span>


                <div className="w-full flex items-center justify-center pb-3">
                    <button type="submit" className="w-full text-white bg-purple-700 py-2 md:mx-3 rounded-md font-bold hover:bg-slate-400 hover:text-black mt-3">Submit</button>
                </div>
            </div>     
        </form>
    </section>
  )
}

export default ClassRoutineForm