import { findAll, findOne, insertOne } from "../DAL/authD.js";
import bcrypt from "bcrypt"

export async function createUser(user = {}) {
    try {
        const users = await insertOne(user)
       return users.insertedId
    } catch (error) {
        throw error
    }
}

export async function findUser(agentCode) {
    try {
        const findOneUser = await findOne(agentCode)
        return findOneUser
    } catch (error) {
        throw error
    }
}

export async function findAllAgents(){
    try {
        const allAgents = await findAll()
        return allAgents
    } catch (error) {
        throw error
    }
}
export function hashingPassword(password){
    try {
        const hash = bcrypt.hashSync(password,10)
        return hash
    } catch (error) {
        throw error
    }
}