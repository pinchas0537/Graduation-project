import {Router} from "express"
import { login } from "../controller/authC.js"
import { loginError } from "../middleware/loginError.js"
import { authLogin } from "../middleware/authLogin.js"

const router = Router()

router.post("/login",loginError,authLogin,login)

// router.get("/me")

export default router