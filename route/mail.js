const express=require('express')
const router=express.Router();
const nodemailer=require('nodemailer')
router.post('/sendMail',(req,res)=>{
    try{
        const {email1,email2,subject,message}=req.body;
        const transporter=nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth:{
                user:'sanjeet.kumar935421@gmail.com',
                pass:'Sk@1617027'
              },tls:{
                rejectUnAuthorized:false
            }
        })
        const mailOptions={
            from:'lifexinfo <sanjeet.mahto@lifexinfo.com>',
            to:`${email1},${email2}`,
            subject:subject,
            text:message
        }
     transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log(err)
            }
            else{
                res.status(200).json({message:"email Sent sucessfully",success:true,info:info.response})
            }
        })
    }catch(err){
        console.log(err)
        res.status(400).json({message:"Something went wrong",success:false,err:err})
    }
})

module.exports=router;