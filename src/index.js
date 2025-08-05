// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is runing at port : ${process.env.PORT}`)
    })
    app.on("error",(error)=>{
        console.log("error:",error)
    })
})
.catch((err)=>{
    console.log(`mongo db connection error${err}`)
})






/*
import express from "express"
const app = express()

;(async()=>{
    try {
       const database = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("error",error)
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("error",error)

    }
})()*/