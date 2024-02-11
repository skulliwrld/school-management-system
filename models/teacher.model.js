
import {Schema , model, models} from "mongoose"
const TeacherSchema = new Schema({
    name:{
        type:String,  
    },
    email:{
        type:String,
    },

    DOB:{
        type:String
    },

    gender:{
        type:String,
    },

    address:{
        type:String,
    },

    password:{
        type:String
    },
    phone:{
        type:Number,
    },
  
},{timestamps:true})

export const Teacher = models.Teacher || model("Teacher",TeacherSchema)