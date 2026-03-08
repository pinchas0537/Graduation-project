import {Router} from "express"
import { createNewUser } from "../controller/adminC.js"
import { errorReq } from "../middleware/eroorReq.js"

const router = Router()

router.post("/users",errorReq,createNewUser)

export default router