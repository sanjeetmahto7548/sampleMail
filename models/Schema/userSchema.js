const mongoose=require('../connection');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})
const userModel=mongoose.model('userData',userSchema)
module.exports=userModel;