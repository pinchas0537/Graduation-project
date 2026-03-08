import {Router} from "express"
import { login } from "../controller/authC.js"
import { loginError } from "../middleware/loginError.js"

const router = Router()

router.post("/login",loginError,login)

export default router