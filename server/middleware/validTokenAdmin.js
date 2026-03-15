import { config } from "dotenv";
import { verifyToken } from "../services/token.js";
config()
export function validAdmin(req, res, next) {
    try {
        const token = req.headers.authorization;
        const varify = verifyToken(token, process.env.SECRET_JWT)
        if (varify.role === "agent") return res.status(403).json({ Error: "You do not have the appropriate permission." })
        next()
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}