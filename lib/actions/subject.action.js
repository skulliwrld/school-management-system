"use server"
import { Subject } from "@/models/subject.model";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "../Database/connectToDB";



// ADDING SUBJECTS TO DB
export const addSubject = async (FormData) =>{
 
    const {name,teacher,desc,CLASS} = Object.fromEntries(FormData)
    try {
        connectToDB()
        const newSubject = new Subject({
            Name:name,
            assignedTeacher:teacher,
            description:desc,
            class:CLASS
        })

        await newSubject.save()
        if(newSubject.ok){
            console.log("it is okay----")
        }
    } catch (error) {
       console.log(error.message) 
    }

    revalidatePath("/subject")
    redirect("/subject")
 }

// FETCHING SUBJECTS RELATED TO CLASS ONLY
 export const FetchSubjectByClass = async (class_id,q,page) =>{

    const regex = new RegExp(q,"i")
    const ITEMS_PAR_PAGE = 5

    try{
        await connectToDB();

        const count = await Subject.find({name:{$regex:regex}}).count()

        const subjects = await Subject.find({class:class_id,Name:{$regex:regex}}).populate("class").populate("assignedTeacher").limit(ITEMS_PAR_PAGE).skip(ITEMS_PAR_PAGE * (page-1))

        if(!subjects){
            console.log("there was an issue when getting our data")
        }

        return {subjects, count}
    
    
    }catch(error){
        console.log(error)
    }
}

export const FetchSubjectByClassAlone = async (class_id) =>{
    try{
        await connectToDB();
        const subjects = await Subject.find({class:class_id}).populate("class").populate("assignedTeacher")
        if(!subjects){
            console.log("there was an issue when getting our data")
        }
        return subjects
    
    
    }catch(error){
        console.log(error)
    }
}

// EDITING SUBJECT FORM ACTION.
export const SubjectUpdate = async (FormData) =>{
    const  {id,Name,assignedTeacher,class:Data,description} = Object.fromEntries(FormData)
    try {
        connectToDB()
        const updateSubjectFieds = {
            Name,assignedTeacher,class:Data,description
        }

        Object.keys(updateSubjectFieds).forEach((key) =>(updateSubjectFieds[key] === "" || undefined) && delete updateSubjectFieds[key]);

        await Subject.findByIdAndUpdate(id,updateSubjectFieds)

    } catch (error) {
        console.log(error)
        
    }
    
    revalidatePath(`/subject/65cc7857bfa8017180971d8a`)
    redirect(`/subject/65cc7857bfa8017180971d8a`)
}

// FETCHING INDIVIDUAL SUBJECT DATA
export  const fetchIndividuaLSubjectData = async (id) =>{
    try {
        await connectToDB()
        const SUBJECTS = await Subject.findById(id).populate("assignedTeacher").populate("class")
        return SUBJECTS
    } catch (error) {
        console.log(error)   
    }
}

// DELETING SUBJECT FUNCTION
export const deleteSubject = async (FormData) =>{

    const {id} = Object.fromEntries(FormData);
    try {
        connectToDB();
        await Subject.findByIdAndDelete(id)
    } catch (error) {
        console.log(error)
        throw new Error("Failed to Delete Product")
    }
    revalidatePath("/subject")
    redirect("/subject")
}