"use server"
import { classSection } from "@/models/classSection.model";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "../Database/connectToDB";

export const addClassSection = async (FormData) =>{
 
    const {Name,NickName,sectionTeacher, CLASS} = Object.fromEntries(FormData)
    try {
        connectToDB()
        const NewClassSection = new classSection({
            Name,
            NickName,
            sectionTeacher,
            CLASS
        })

        await NewClassSection.save()
        if(NewClassSection.ok){
            console.log("it is okay----")
        }
    } catch (error) {
       console.log(error.message) 
    }

    revalidatePath("/class/manage-section")
    redirect("/class/manage-section")
 }


 export const FetchSectionByClass = async (class_id) =>{
    try{
        await connectToDB();
        const SECTIONS = await classSection.find({CLASS:class_id}).populate("CLASS").populate("sectionTeacher")
        if(!SECTIONS){
            console.log("there was an issue when getting our data")
        }
        return SECTIONS
    
    
    }catch(error){
        console.log(error)
    }
}