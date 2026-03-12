import { config } from "dotenv";
import { findOne } from "../DAL/authD.js";
import { signToken } from "./token.js";
config()

export async function loginUser(agentCode) {
    try {
        const user = await findOne(agentCode)
        const { hashPassword, ...newObjUser } = user
        const token = signToken({ role: newObjUser.role, agentCode: agentCode }, process.env.SECRET_JWT)
        return { newObjUser, token }
    } catch (error) {
        throw error
    }
}