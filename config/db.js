const mongoose=require('mongoose')

const connection= mongoose.connect('mongodb://0.0.0.0/BACKEND').then(()=>{
    console.log("connected to the database");
    
})

module.exports=connection