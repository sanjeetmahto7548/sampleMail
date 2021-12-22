const express=require('express');
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/',require('./route/index'))
app.use('/',require('./route/mail'))
const PORT=4500

app.listen(process.env.PORT || PORT,(err)=>{
if(err){
    console.log(`Error in server connection ${err}`)
}
else{
    console.log(`Server is running on port ${PORT}`)
}
})