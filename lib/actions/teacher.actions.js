"use server"
import { connectToDB } from "../Database/connectToDB"
import { Teacher } from "@/models/teacher.model"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const FetchTeachers = async (q,page) =>{
    const regex = new RegExp(q,"i")
    const ITEMS_PAR_PAGE = 5
    try{
        await connectToDB();

        const count = await Teacher.find({name:{$regex:regex}}).count()

        const Teachers =  await Teacher.find({name:{$regex:regex}}).limit(ITEMS_PAR_PAGE).skip(ITEMS_PAR_PAGE * (page-1))
        
        return {Teachers, count}
    
    
    }catch(error){
        console.log(error)
    }
}


export const addTeacher = async (FormData) =>{
 
    const {name,DOB, gender,address,phone,email,password} = Object.fromEntries(FormData.entries())
    try {
        connectToDB()
        const NewTeacher = new Teacher({
            name,
            DOB,
            gender,
            address,
            email,
            password,
            phone
        })

        await NewTeacher.save()
        if(NewTeacher.ok){
            console.log("it is okay----")
        }
    } catch (error) {
       console.log(error.message) 
    }

    revalidatePath("/schoolmgt/teacher")
    redirect("/schoolmgt/teacher")
  
 }


 export  const fetchIndividualTeacherData = async (id) =>{
    try {
        await connectToDB()
        const Teachers = await Teacher.findById(id)
        return Teachers
    } catch (error) {
        console.log(error)   
    }
}


export const TeacherUpdate = async (FormData) =>{
    const  {id,name,DOB, gender,address,phone,email,password} = Object.fromEntries(FormData)
    try {
        connectToDB()
        const updateTeacherFieds = {
            name,DOB, gender,address,phone,email,password
        }

        Object.keys(updateTeacherFieds).forEach((key) =>(updateTeacherFieds[key] === "" || undefined) && delete updateTeacherFieds[key]);

        await Class.findByIdAndUpdate(id,updateTeacherFieds)

    } catch (error) {
        console.log(error)
        
    }
    
    revalidatePath("/teacher")
    redirect(`/teacher`)
}


export const deleteTeacher = async (FormData) =>{

    const {id} = Object.fromEntries(FormData);
    try {
        connectToDB();
        await Teacher.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to Delete Product")
    }
    revalidatePath("/teacher")
    redirect("/teacher")
}