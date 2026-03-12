import { deleted, findAll, findOne, insertOne, updateAllFields, updateOneField } from "../DAL/authD.js";
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

export async function findAllAgents() {
    try {
        const allAgents = await findAll()
        return allAgents
    } catch (error) {
        throw error
    }
}

export async function editOneField(id, queryParams, query) {
    try {
        const result = await updateOneField(id, queryParams, query)
        return result
    } catch (error) {
        throw error
    }
}

export async function editAllFields(id, data = {}) {
    try {
        const result = await updateAllFields(id, data)
        return result
    } catch (error) {
        throw error
    }
}

export async function deleteOne(id) {
    try {
        const result = await deleted(id)
        return result
    } catch (error) {
        throw error
    }
}

export function hashingPassword(password) {
    try {
        const hash = bcrypt.hashSync(password, 10)
        return hash
    } catch (error) {
        throw error
    }
}