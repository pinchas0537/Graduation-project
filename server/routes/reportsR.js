import { Router} from "express"
import { reportCsv, reportFilterById, reportFiltering, sendingReport } from "../controller/reportsC.js"
import { imageFile } from "../middleware/imageFile.js"
import { csvFile } from "../middleware/csvFile.js"
import { reportError } from "../middleware/reportM.js"
import { validRoleReports } from "../middleware/validRoleGetReport.js"

const router = Router()

router.post("/",reportError,imageFile,sendingReport)

router.post("/csv",csvFile,reportCsv)

router.get("/",validRoleReports,reportFiltering)

router.get("/:id",reportFilterById)

export default router