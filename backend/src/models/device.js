const mongoose = require("mongoose")
const DeviceSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    deviceToken : {
        type : String,
        required : true
    }
},{timestamps : true})
module.exports = mongoose.model("Device",DeviceSchema)