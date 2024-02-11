import {Schema , model, models} from "mongoose"


const subjectSchema = new Schema({
    Name:{
        type:String,  
    },
    class:{
        type:Schema.Types.ObjectId,
        ref:"Class"
    },
    assignedTeacher:{
        type:Schema.Types.ObjectId,
        ref:"Teacher"
    }
},{timestamps:true})

export const Subject = models.Subject || model("Subject",subjectSchema)