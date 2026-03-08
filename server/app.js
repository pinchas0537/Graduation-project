import { config } from "dotenv"
import express from "express"
import cors from "cors"
import adminRouter from "./routes/adminR.js"
import authR from "./routes/authR.js"
config()

const app = express()

const port = process.env.PORT

app.use(express.json())

app.use(cors({
    exposedHeaders:["Authorization"]
}))

app.get("/", (req, res) => {
    res.send("wolcome to project")
})

app.use("/auth",authR)

app.use("/admin",adminRouter)

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`)
})