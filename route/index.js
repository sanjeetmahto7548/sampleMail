const express=require('express');
const router=express.Router();
const userModel=require('../models/Schema/userSchema');
router.post('/add',async(req,res)=>{
    try{
        const {name,age,email,address}=req.body
        
       const user=new userModel({
           name,age,email,address
       })
       const data=await user.save();
       res.status(201).json({message:"data inserted Successfully",success:true,data:data})
    }catch(err){
        res.status.json({message:"Something went wrong",success:false,err:err})
    }
    
})
router.get('/getdata',async(req,res)=>{
    try{
const data=await userModel.find();
res.status(200).json({message:"all data retreived",data:data,success:true})
    }catch(err){
res.status(400).json({message:"Something went wrong",err:err,succcess:false})
    }
})
module.exports=router;