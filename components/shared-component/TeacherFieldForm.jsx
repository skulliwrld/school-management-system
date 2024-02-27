import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
const TeacherForm = ({type,handleFuction,content}) => {
  return (
    <form className="flex flex-col px-20 border" action={handleFuction}>
            
            <input type="hidden" name="id" value={content._id} />

            <label className="text-center text-sm text-gray-500 py-2" >School Management System--- Teachers</label>
            <span className="flex items-center gap-2 my-2 border py-2 px-2"><IoAddCircleOutline  className="text-gray-500" size={20}/>{type} Teacher</span>
            <div className="border">
                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Name</label>
                    <input type="text" placeholder={content.name} className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none" name="name" />
                </span>
                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Birthday</label>
                    <input type="text" placeholder={content.DOB} className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none" name="DOB" />
                </span>
                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Gender</label>
                    <select name="gender" id="" className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none">
                        <option value="male">{content.gender}</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="cantsay">Can't say</option>
                    </select>
                </span>

                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Address</label>
                    <input type="text" placeholder={content.address} className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none " name="address" />
                </span>

                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Phone</label>
                    <input type="text" placeholder={content.phone} className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none " name="phone" />
                </span>

                <span className="flex justify-center items-center border px-2 text-center gap-3 py-5">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" placeholder={content.email} className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none " name="email" />
                </span>

                <span className="flex justify-center items-center border text-center gap-3 py-5">
                    <label className="text-sm font-medium">Password</label>
                    <input type="password" placeholder={content.password} className="bg-primary text-black border rounded-md px-3 w-96 my-1 h-10 outline-none" name="password" />
                </span>
                
                <div className="w-full flex items-center justify-center pb-3">
                    <button type="submit" className="w-full text-white bg-purple-700 py-2 md:mx-3 rounded-md font-bold hover:bg-slate-400 hover:text-black mt-3">{type =="edit"?"Update":"Submit"}</button>
                </div>
                
            </div>    
        </form>
  )
}

export default TeacherForm