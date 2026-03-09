import { compareSync } from "bcrypt"
import { findUser } from "../services/admin.js"

export async function authLogin(req, res, next) {
    const { agentCode, password } = req.body
    const find = await findUser(agentCode)
    if (find) {
        const passwordCompare = compareSync(password, find.hashPassword)
        if (passwordCompare === false) return res.status(401).json({ error: "password or agent code is invalid!" })
        return next()
    }
    else{
        return res.status(401).json({message:"No agent found"})
    }
}