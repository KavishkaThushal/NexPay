import express from 'express'
import User from '../models/userModel.js'
const router=express.Router()
const addPinController=async(req,res)=>{
    const {email,pin}=req.body

    try {
        const user=await User.findOneAndUpdate({email},{pin:pin})
        res.status(200).send({success:true,message:'pin added successfully'})
    } catch (error) {
        console.log(error)
        res.status(404).send({success:false,message:'Server error'})
    }
}
const pinVerify=async(req,res)=>{
    const {pin}=req.body
    try {
        const user=await User.findOne({pin:pin})
        if(!user) res.status(404).send({success:false,message:'invalid'})
        if(user){
            res.status(200).send({success:true,message:'pin verified successfully',email:user.email})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Server error'})
    }
}
router.post('/addpin',addPinController)
router.post('/pinverify',pinVerify)
export {router as addPin}