import {Schema , model, models} from "mongoose"
const studentSchema = new Schema({
    Name:{
        type:String,  
    },
    Parent:{
        type:Schema.Types.ObjectId,
        ref:"Parent"
    },
    Class:{
        type:Schema.Types.ObjectId,
        ref:"Class"
    },
    DOB:{
        type:String
    },
    Gender:{
        type:String
    },
    section:{
        type:Schema.Types.ObjectId,
        ref:"Section"
    },

    Address:{
        type:String
    },

    Phone:{
        type:Number
    },
    Email:{
        type:String
    },

    Password:{
        type:String
    },
    hasPaid:{
        type:Boolean,
        default:false
    }


    

},{timestamps:true})

export const Student = models.Student || model("Student",studentSchema)