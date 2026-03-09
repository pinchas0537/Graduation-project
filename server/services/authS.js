import { config } from "dotenv";
import { findOne } from "../DAL/authD.js";
import { signToken } from "./token.js";
config()

export async function loginUser(agentCode) {
    try {
        const insert = await findOne(agentCode)
        const {hashPassword , ...newObjUser} = insert
        const token = signToken({ role: "agent", agentCode: agentCode },process.env.SECRET_JWT)
        return { newObjUser, token }
    } catch (error) {
        throw error
    }
}