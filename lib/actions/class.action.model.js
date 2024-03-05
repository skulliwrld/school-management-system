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


 export const ClassUpdate = async (FormData) =>{
    const  {id,name , numericId , assignedTeacher} = Object.fromEntries(FormData)
    try {
        connectToDB()
        const updateClassFieds = {
            name , numericId, assignedTeacher
        }

        Object.keys(updateClassFieds).forEach((key) =>(updateClassFieds[key] === "" || undefined) && delete updateClassFieds[key]);

        await Class.findByIdAndUpdate(id,updateClassFieds)

    } catch (error) {
        console.log(error)
        
    }
    
    // revalidatePath("/class")
    redirect(`/class`)
}

// DELETING PRODUCT AND USER FUNCTION
export const deleteClass = async (FormData) =>{

    const {id} = Object.fromEntries(FormData);
    try {
        connectToDB();
        await Class.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to Delete Product")
    }
    revalidatePath("/schoolmgt/class")
    redirect("/schoolmgt/class")
}
