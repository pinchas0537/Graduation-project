import { Router } from "express"
import { createNewUser, getAll, oneDelete, updateAllFields, updateOneField } from "../controller/adminC.js"
import { errorReq } from "../middleware/eroorReq.js"
import { authAdmin } from "../middleware/authAdmin.js"
import { validAdmin } from "../middleware/validTokenAdmin.js"

const router = Router()

router.post("/users", errorReq, validAdmin, authAdmin, createNewUser)

router.get("/users", validAdmin, getAll)

router.put("/users", errorReq, validAdmin, updateAllFields)

router.patch("/users", validAdmin, updateOneField)

router.delete("/users", validAdmin, oneDelete)

export default router