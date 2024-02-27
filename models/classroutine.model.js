
import {Schema , model, models} from "mongoose"

const classRoutineSchema = new Schema({
    Class:{
        type:Schema.Types.ObjectId,
        ref:"Class"
    },
    Subject:{
        type:Schema.Types.ObjectId,
        ref:"Subject"
    },
    Day:{
        type:Schema.Types.ObjectId,
        ref:"Day"
    },
    startingTime:{
        type:String
    },
    endingTime:{
        type:String
    },
    startPeriod:{
        type:String
    },
    endPeriod:{
        type:String
    },
},{timestamps:true})

export const ClassRoutine = models.ClassRoutine || model("ClassRoutine",classRoutineSchema)