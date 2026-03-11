import { findUser } from "../services/admin.js"

export async function authAdmin(req, res, next) {
    try {
        const { agentCode } = req.body
        const find = await findUser(agentCode)
        if (find) return res.status(409).json({ message: "Agent code already exists in the system." })
        next()
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}