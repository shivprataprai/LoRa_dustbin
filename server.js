const express=require('express')
const mongoose=require('mongoose')
const DB=require('./connection')
const bodyParser=require('body-parser')

const app=express()

app.use(bodyParser.json())
app.post("/",async(req,res)=>{
    console.log("got a request")
    console.log(JSON.stringify(req.body))
    await DB.create(req.body)
    console.log("Ho gail")
    res.status(200).send("Hai gava")
})
app.get("/",(req,res)=>{
    res.send("SERVER UP AND RUNNING")
})

console.log(process.env.PORT)

app.listen(process.env.PORT||3000,()=>console.log("Shuru hoi gava"))