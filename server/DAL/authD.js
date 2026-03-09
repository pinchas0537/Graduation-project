import { connect } from "../db/db.js"

const db = await connect()

const collection = "Graduationproject"

export async function insertOne(data = {}) {
    try {
        const result = await db.collection(collection).insertOne(data)
        return result
    } catch (error) {
        throw error
    }
}

export async function findOne(agentCode) {
    try {
        const result = await db.collection(collection).findOne({ agentCode: agentCode })
        return result
    } catch (error) {
        throw error
    }                         
}

export async function findAll(){
    try {
        const result = await db.collection(collection).find().toArray()
        return result
    } catch (error) {
        throw error
    }
}