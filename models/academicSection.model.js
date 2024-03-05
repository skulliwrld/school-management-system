import {Schema , model, models} from "mongoose"
const acadmicSchema = new Schema({
    name:{
        type:String,  
    },
    isOpen:{
        type:Boolean,
        default:true
    },
    startDate:{
        type:String
    },
    endDate:{
        type:String
    }
},{timestamps:true})

export const AcademicSection = models.AcademicSection || model("AcademicSection",acadmicSchema)