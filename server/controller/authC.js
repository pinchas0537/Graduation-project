import { config } from "dotenv"
import { loginUser } from "../services/authS.js"
import { verifyToken } from "../services/token.js"
config()
export async function login(req, res) {
  try {
    const { agentCode } = req.body
    const create = await loginUser(agentCode)
    return res.status(200).json({ token: create.token, user: create.newObjUser })
  } catch (error) {
    return res.status(500).json({ Error: error.message })
  }
}

export async function loginMe(req, res) {
  try {
    const token = req.headers.authorization
    const verify = verifyToken(token, process.env.SECRET_JWT)
    const usere = await loginUser(verify.agentCode)
    return res.json({ user: usere.newObjUser })
  } catch (error) {
    return res.status(500).json({ Error: error.message })
  }
}