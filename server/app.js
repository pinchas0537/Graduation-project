import express from "express"
import cors from "cors"
import {config} from "dotenv"
config()

const app = express()

const port = process.env.PORT

app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.send("wolcome to project")
})

app.listen(port,()=>{
    console.log(`server runing on http://localhost:${port}`)
})