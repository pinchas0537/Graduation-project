import { config } from "dotenv";
import { insertOne } from "../DAL/authD.js";
import { signToken } from "./token.js";
config()

export async function creataUser(user = {}) {
    try {
        const insert = await insertOne(user)
        const token = signToken({ role: "agent", agentCode: user.agentCode },process.env.SECRET_JWT)
        return { insert, token }
    } catch (error) {
        throw error
    }
}