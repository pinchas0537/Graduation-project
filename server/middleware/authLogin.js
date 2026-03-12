import { compareSync } from "bcrypt"
import { findUser } from "../services/admin.js"

export async function authLogin(req, res, next) {
    try {
        const { agentCode, password } = req.body
        const find = await findUser(agentCode)
        if (find) {
            const passwordCompare = compareSync(password, find.hashPassword)
            if (passwordCompare === false) return res.status(401).json({ Error: "password or agent code is invalid!" })
            return next()
        }
        else {
            return res.status(401).json({ Error: "password or agent code is invalid!" })
        }
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}