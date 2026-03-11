import {connect} from "../db/db.js"

const db = await connect()

const collection = "reports"

export async function insertReport(report = {}) {
    try {
        const result = await db.collection(collection).insertOne(report)
        return result
    } catch (error) {
        throw error
    }
}