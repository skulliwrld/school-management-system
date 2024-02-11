"use server"

import { Teacher } from "@/models/teacher.model";
import { connectToDB } from "../Database/connectToDB";
export const fetchTeachers = async (q,page) =>{

    const USER_PAR_PAGE = 5

    const regex = new RegExp(q,"i")
    try{
        await connectToDB();
        const count= await Teacher.find({name:{$regex:regex}}).count()
        const users =  await Teacher.find({name:{$regex:regex}}).limit(USER_PAR_PAGE).skip(USER_PAR_PAGE * (page -1));
        return {users,count}
    }catch(error){
        console.log(error)
    }
}

// getting all Teachers Data

export const AllTeachersFetch = async () =>{
    try{
        await connectToDB();
        const teachers =  await Teacher.find()
        if(!teachers){
            console.log("there was an issue when getting teachers data")
        }
        return teachers
    }catch(error){
        console.log(error)
    }
}
