const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRouter = require('./routes/userRouter')
const deviceRouter = require('./routes/deviceRouter')
const logRouter = require('./routes/logRouter')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
dotenv.config()
const port = process.env.PORT
const MONGO_DB_URI = process.env.MONGO_DB_URI

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use((req,res,next)=>{
    console.log(`HTTP Method - ${req.method} URL - ${req.url}`)
    next()
})
app.use(session({
    secret:process.env.SECRET_KEY,
    saveUninitialized:true,
    resave:false,
    cookie:{httpOnly:true,maxAge:1000*60*60*24}
}))
app.use("/users",userRouter)
app.use("/devices",deviceRouter)
app.use("/logs",logRouter)
mongoose.connect(MONGO_DB_URI).then(()=>{
    app.listen(port,()=>{
        console.log(`Server listening at ${port}...`)
     })
}).catch((error)=>{
    console.log(`Error:${error}`)
})
