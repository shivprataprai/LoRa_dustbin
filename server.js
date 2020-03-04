const express=require('express')
const mongoose=require('mongoose')
const DB=require('./connection')
const body_parser=require('body-parser')

const app=exprress()

app.use(bodyParser.json())
app.post("/",(req,res)=>{
    console.log(JSON.stringify(req.body))
    await DB.create(JSON.stringify(req.body))
    console.log("Ho gail")
    res.status(200).send("Hai gava")
})

app.listen(process.env.PORT,()=>console.log("Shuru hoi gava"))