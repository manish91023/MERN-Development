require('dotenv').config()

const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 
const cloudinary = require('cloudinary').v2;
const express = require('express')
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const User= require('./models/Users')
const cors = require('cors')

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
})

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>console.log("db connected"))
.catch((err)=>{if(err){console.log(err)}})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors()) 



app.get('/getUsers',async(req,res)=>{
    const users= await User.find({})
    res.json(users)
})


app.post('/createUser',async(req,res)=>{
    const user = req.body;
    const newUser= new User(user)
    await newUser.save()
    res.json(user)
})


//upload image routes 
app.post('/uploadImage',upload.single('file'),async(req,res)=>{
    try {
        const fileStr = req.file.path;
        console.log(fileStr)
        const uploadResponse = await cloudinary.uploader.upload(fileStr,{
            upload_preset:'le0w7ev3'
        })
        res.json({url:uploadResponse.secure_url})
    } catch (error) {
        console.error(error)
        res.status(500).send("server error")
    }
})
app.listen(port,()=>{
    console.log("server runs "+port)
})