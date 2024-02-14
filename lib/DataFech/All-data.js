"use server"

import { Teacher } from "@/models/teacher.model";
import { connectToDB } from "../Database/connectToDB";
import { Class } from "@/models/class.model";
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


const populateClass = (query) => {
    return query
      .populate({ path: 'assignedTeacher', model: Teacher, select: '_id name DOB' })
  }

export const FetchClasses = async (q,page) =>{
    const regex = new RegExp(q,"i")
    const ITEMS_PAR_PAGE = 5
    try{
        await connectToDB();

        const count = await Class.find({name:{$regex:regex}}).count()

        const classes =  await Class.find({name:{$regex:regex}}).populate("assignedTeacher").limit(ITEMS_PAR_PAGE).skip(ITEMS_PAR_PAGE * (page-1))
        
        return {classes, count}
    
    
    }catch(error){
        console.log(error)
    }
}

export  const fetchIndividualClassData = async (id) =>{
    try {
        await connectToDB()
        const CLASS = await Class.findById(id).populate("assignedTeacher")
        return CLASS
    } catch (error) {
        console.log(error)   
    }
}
