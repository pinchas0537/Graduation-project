import {Router} from "express"
import { createNewUser, getAll } from "../controller/adminC.js"
import { errorReq } from "../middleware/eroorReq.js"
import { authAdmin } from "../middleware/authAdmin.js"
import { validAdmin } from "../middleware/validToken.js"

const router = Router()

router.post("/users",errorReq,validAdmin,authAdmin,createNewUser)

router.get("/users",validAdmin,getAll)

export default router