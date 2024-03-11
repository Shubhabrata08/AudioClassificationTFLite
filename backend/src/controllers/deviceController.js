const deviceModel = require("../models/device")
const connectDevice = async(req,res)=>{
   const {deviceToken} = req.body
   const data = new deviceModel({
    deviceToken : deviceToken,
    userId : req.userId
   })
   try{
      await data.save()
      res.status(201).json(data)
   }
   catch(error)
   {
     console.log(error)
     res.status(500).json({message:"Something went wrong"})
   }
 }

const updateDevicetoken = async(req,res)=>{
   const id = req.params.id
   const {deviceToken} = req.body
   const newData = {
    deviceToken:deviceToken,
    userId:req.userId
   } 
   try{
      const updatedData = await deviceModel.findByIdAndUpdate(id,newData,{new : true})
      res.status(200).json(updatedData)
   }
   catch(error)
   {
    console.log(error)
    res.status(500).json({message:"Something went wrong"})
   }
}

const disconnectDevice = async(req,res)=>{
     const id = req.params.id
     try{
        const data = await deviceModel.findByIdAndDelete(id)
        res.status(202).json(data)
     }
     catch(error)
     {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
     }
}

const getDevicetoken = async(req,res)=>{
     try{
        const data = await deviceModel.find({userId:req.userId})
        res.status(200).json(data)
     }
     catch(error)
     {
        console.log(error)
        res.status(500).json({message:"Something went wrong"})
     }
}

module.exports = {connectDevice,updateDevicetoken,disconnectDevice,getDevicetoken}