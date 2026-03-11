import { Router} from "express"
import { sendingReport } from "../controller/reportsC.js"
import { imageFile } from "../middleware/imageFile.js"

const router = Router()

router.post("/",imageFile,sendingReport)

// router.post("/csv")

// router.get("/")

// router.get("/:id")

export default router