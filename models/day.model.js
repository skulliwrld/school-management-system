import {Schema , model, models} from "mongoose"
const DaySchema = new Schema({
    name:{
        type:String,  
    },
})

export const Day = models.Day || model("Day",DaySchema)