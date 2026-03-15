import { config } from "dotenv"
import { verifyToken } from "../services/token.js"
config()
export function validRoleReports(req, res, next) {
    try {
        const token = req.headers.authorization
        if (!token || token === "") return res.status(401).json({ Error: "The token is missing or invalid." })
        const verify = verifyToken(token, process.env.SECRET_JWT)
        if (verify.role === "agent" || verify.role === "admin") {
            req.user = verify.role
            return next()
        }
        else {
            return res.status(403).json({ Error: "The token is missing or invalid." })
        }
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}