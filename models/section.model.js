import {Schema , model, models} from "mongoose"
const classSchema = new Schema({
    Name:{
        type:String,  
    },
    Class:{
        type:Schema.Types.ObjectId,
        ref:"Class"  
    },
    
},{timestamps:true})

export const Class = models.Class || model("Class",classSchema)