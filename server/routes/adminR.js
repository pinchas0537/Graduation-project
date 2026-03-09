import {Router} from "express"
import { createNewUser, getAll } from "../controller/adminC.js"
import { errorReq } from "../middleware/eroorReq.js"
import { authAdmin } from "../middleware/authAdmin.js"

const router = Router()

router.post("/users",errorReq,authAdmin,createNewUser)

router.get("/users",getAll)

export default router