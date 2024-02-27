"use server"
import { connectToDB } from "../Database/connectToDB"
import { ClassRoutine } from "@/models/classroutine.model"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export const addRoutine = async (FormData) =>{
 
    const {Class,Subject,startingTime, endingTime, Day, startPeriod,endPeriod} = Object.fromEntries(FormData)
    try {
        connectToDB()
        const NewRoutine = new ClassRoutine({
           Class,
           Subject,
           startingTime,
           endingTime,
           Day,
           startPeriod,
           endPeriod

        })

        await NewRoutine.save()
        if(NewRoutine.ok){
            console.log("it is okay----")
        }
    } catch (error) {
       console.log(error.message) 
    }

    revalidatePath("/classroutine")
    redirect("/classroutine")
 }

 export const FetchClassRoutineByClass = async (class_id) =>{

    try{
        await connectToDB();

        const Routine = await ClassRoutine.find({Class:class_id}).populate("Class").populate("Subject").populate("Day")

        
        return Routine
    
    
    }catch(error){
        console.log(error)
    }
}