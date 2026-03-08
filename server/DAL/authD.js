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