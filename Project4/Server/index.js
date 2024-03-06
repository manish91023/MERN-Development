const express = require("express");
const { default: mongoose } = require("mongoose");
const app=express()
const port= 3000;
const cors = require("cors")
const User=require('./Models/User')



mongoose.connect("mongodb://localhost:27017/mernBlog")
.then((res)=>console.log("db connected"))
.catch((err)=>{console.log(err)})


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/",(req,res)=>{
    res.send("thanks")
})

app.get('/allUser',async(req,res)=>{
    const data = await User.find({});
    // console.log(data)
    res.status(200).json(data)
})

app.post('/create',async(req,res)=>{
    const {email,name,age,salery}=req.body
    try{
        if(email==='undefined' || name==='undefined' || age==='undefined' || salery==='undefined'){
            return res.send("fill the all details")
        }else{
            const data =  new User(req.body)
            await data.save()
            console.log(data)
            res.status(200).json(data)
        }
        
    } 
    catch(err){
        res.send(err)
        console.log(err)
    }
})

app.delete('/delete/:id',async(req,res)=>{
  try {
    const {id}=req.params;
    console.log(id)
    await User.findByIdAndDelete(id);
    res.status(200).json({message:"user deleted"})
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
}) 
app.get('/user/:id',async(req,res)=>{

    try {
        const {id} = req.params;
        const data = await User.findById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error)
    }
})
app.put('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = req.body;
        const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
}); 



app.listen(port,()=>{
    console.log("running at "+port)
})

