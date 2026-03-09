import { findUser } from "../services/admin.js"

export async function authAdmin(req, res, next) {
    const { agentCode } = req.body
    const find = await findUser(agentCode)
    if (find) return res.status(409).json({ message: "Agent code already exists in the system." })
    next()
}