const mongoose =require('mongoose')

const userShema = new mongoose.Schema({
    name:String,
    email:{
       type: String,
        required:true
    },
    age:{
        type:String,
        min:10,
        max:100
    },
    salery:{
        type:String,
        min:10000,
        max:100000
    }

})

module.exports=new mongoose.model("allUser",userShema)