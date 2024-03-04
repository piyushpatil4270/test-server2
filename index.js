import express from "express"

const app = express()

const port = 6200

app.get("/",(req,res)=>{
    res.send("this is test server 2")
})

app.listen(port,()=>console.log(`Server started on port ${port}`))