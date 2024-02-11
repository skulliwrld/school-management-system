import {Schema , model, models} from "mongoose"
const classSchema = new Schema({
    assignedTeacher:{
        type:String,
    },
    name:{
        type:String,  
    },
    numericId:{
        type:Number,
    },
},{timestamps:true})

export const Class = models.Class || model("Class",classSchema)