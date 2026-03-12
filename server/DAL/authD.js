import { ObjectId } from "mongodb"
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

export async function findAll() {
    try {
        const result = await db.collection(collection).find().toArray()
        return result
    } catch (error) {
        throw error
    }
}

export async function updateAllFields(id, data = {}) {
    try {
        const result = await db.collection(collection).findOneAndReplace({ _id: new ObjectId(id) }, data)
        return result
    } catch (error) {
        throw error
    }
}

export async function updateOneField(id, queryParams, query) {
    try {
        const result = await db.collection(collection).findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { [queryParams]: query } }, { returnDocument: "after" })
        return result
    } catch (error) {
        throw error
    }
}

export async function deleted(id) {
    try {
        const result = await db.collection(collection).findOneAndDelete({_id: new ObjectId(id)})
        return result
    } catch (error) {
        throw error
    }
}