"use server"
import { connectToDB } from "../Database/connectToDB"
import { Teacher } from "@/models/teacher.model"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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