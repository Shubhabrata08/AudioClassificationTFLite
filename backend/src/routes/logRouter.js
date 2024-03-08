const express = require('express')
const auth = require('../middleware/auth')
const {createLog,getLog,updateLog,deleteLog} = require('../controllers/logController')
const logRouter = express.Router()

logRouter.get("/",auth,getLog)
logRouter.post("/",auth,createLog)
logRouter.put("/:id",auth,updateLog)
logRouter.delete("/:id",auth,deleteLog)

module.exports = logRouter