const mongoose = require("mongoose")
const LogSchema = mongoose.Schema({
    deviceId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Device",
        required : true
    },
    event : {
        type : String,
        required : true
    }
},{timestamps : true})
module.exports = mongoose.model("Logs",LogSchema)