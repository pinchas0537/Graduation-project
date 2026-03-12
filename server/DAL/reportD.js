import { ObjectId } from "mongodb"
import { connect } from "../db/db.js"

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

export async function getReportOnFiltering(query) {
    try {
        const result = await db.collection(collection).find(query).toArray()
        return result
    } catch (error) {
        throw error
    }
}

export async function getById(id) {
    try {
        const result = await db.collection(collection).findOne({ _id: new ObjectId(id)})
        return result
    } catch (error) {
        throw error
    }
}