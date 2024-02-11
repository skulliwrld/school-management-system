// CREATING CLASS IN OUR MODEL
"use server"
import { Class } from "@/models/class.model";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "../Database/connectToDB";

export const addClass = async (FormData) =>{
 
    const {Name,number,assignedTeacher} = Object.fromEntries(FormData)
    try {
        connectToDB()
        const NewClass = new Class({
            name:Name,
            numericId:number,
            assignedTeacher,
        })

        await NewClass.save()
        if(NewClass.ok){
            console.log("it is okay----")
        }
    } catch (error) {
       console.log(error.message) 
    }

    revalidatePath("/schoolmgt/class")
    redirect("/schoolmgt/class")
  
 }