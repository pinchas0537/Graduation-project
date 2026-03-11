import {Router} from "express"
import { login, loginMe } from "../controller/authC.js"
import { loginError } from "../middleware/loginError.js"
import { authLogin } from "../middleware/authLogin.js"

const router = Router()

router.post("/login",loginError,authLogin,login)

router.get("/me",loginMe)

export default router