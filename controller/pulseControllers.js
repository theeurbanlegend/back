const Pulse=require('../models/pulseSchema')
const { default: mongoose } = require('mongoose')

const addPulse=async (req,res)=>{
    const {allUsers,verified,exeTime}=req.body
    if(!allUsers||!verified||!exeTime){
        return res.status(400).json({msg:"Inadequate pulse data"})
    }
    const pulse=new Pulse({allUsers,verified,exeTime})
    await pulse.save()
    return res.status(201).json({msg:"New pulse added!"})
}
const getPulse=async (req,res)=>{
    const {id}=req.params
    
    if(!id||!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:"no or invalid id!"})
    }
    const pulse=await Pulse.findOne({_id:id})
    if(!pulse){
        return res.status(404).json({msg:"No pulse data found!"})
    }
    return res.status(200).json(pulse)
}
const getAllPulses=async(req,res)=>{
    const pulses=await Pulse.find()
    if(!pulses){
        return res.status(404).json({msg: "No pulse Data to show!"})
    }

    res.status(200).json(pulses)

}
const deletePulse=async(req,res)=>{
    const {id}=req.params
    
    if(!id||!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg:"no or invalid id!"})
    }
    const pulse=await Pulse.findOneAndDelete({_id:id})
    if(!pulse){
        return res.status(404).json({msg:"No pulse data found!"})
    }
    return res.status(200).json(pulse)
}
module.exports={addPulse,getAllPulses,getPulse,deletePulse}