const express = require("express")
const {connectDevice,updateDevicetoken,disconnectDevice,getDevicetoken} = require("../controllers/deviceController")
const auth = require("../middleware/auth")
const deviceRouter = express.Router()
deviceRouter.get("/",auth,getDevicetoken)
deviceRouter.post("/",auth,connectDevice)
deviceRouter.put("/:id",auth,updateDevicetoken)
deviceRouter.delete("/:id",auth,disconnectDevice)

module.exports = deviceRouter