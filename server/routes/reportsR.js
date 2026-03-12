import { Router} from "express"
import { reportCsv, reportFilterById, reportFiltering, sendingReport } from "../controller/reportsC.js"
import { imageFile } from "../middleware/imageFile.js"
import { csvFile } from "../middleware/csvFile.js"
import { reportError } from "../middleware/reportM.js"

const router = Router()

router.post("/",reportError,imageFile,sendingReport)

router.post("/csv",csvFile,reportCsv)

router.get("/",reportFiltering)

router.get("/:id",reportFilterById)

export default router