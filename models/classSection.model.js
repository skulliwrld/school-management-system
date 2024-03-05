import {Schema , model, models} from "mongoose"
const classSectionSchema = new Schema({
    Name:{
        type:String,  
    },
    NickName:{
        type:String,  
    },
    CLASS:{
        type:Schema.Types.ObjectId,
        ref:'Class',
    },
    sectionTeacher:{
        type:Schema.Types.ObjectId,
        ref:'Teacher',
    }
},{timestamps:true})

export const classSection = models.classSection || model("classSection",classSectionSchema)