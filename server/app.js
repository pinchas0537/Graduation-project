import { config } from "dotenv"
import express from "express"
import fileupload from "express-fileupload"
import cors from "cors"
import adminRouter from "./routes/adminR.js"
import authR from "./routes/authR.js"
import reportsR from "./routes/reportsR.js"
import path from "path"
config()

const app = express()

const port = process.env.PORT

app.use(express.json())

app.use(fileupload())

app.use(express.static(path.join(process.cwd(),"public")))

app.use(cors({
    exposedHeaders:["Authorization"]
}))

app.get("/", (req, res) => {
    res.send("wolcome to project")
})

app.use("/auth",authR)

app.use("/admin",adminRouter)

app.use("/reports",reportsR)

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`)
})