const mongoose=require("mongoose")

const enquiry=mongoose.Schema({
    name:String,
    phone:Number,
    whatsapp:Number,
    email:String,
    businessName:String,
    state:String,
    district:String,
    services: [],
    fromTime: String,
    toTime: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
   })
module.exports=mongoose.model("enquiry",enquiry)