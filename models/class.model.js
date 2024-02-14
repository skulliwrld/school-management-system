import {Schema , model, models} from "mongoose"
const classSchema = new Schema({
    assignedTeacher:{
        type:Schema.Types.ObjectId,
        ref:'Teacher',
    },
    name:{
        type:String,  
    },
    numericId:{
        type:Number,
    },
},{timestamps:true})

export const Class = models.Class || model("Class",classSchema)