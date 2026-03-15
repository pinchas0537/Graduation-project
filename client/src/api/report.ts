import axios, { type AxiosResponse } from "axios"
import type { queryMongoDB } from "../types/UpdateOneFile"

const url = "http://localhost:8080/reports/"

export async function createRoport(fields: FormData, token: string): Promise<AxiosResponse<any, any, {}>> {
    try {
        const report = await axios.post(url, fields, {
            headers: {
                Authorization: token
            }
        })
        return report
    } catch (error) {
        throw error
    }
}

export async function reportCsv(FileCsv: FormData, token: string) {
    try {
        const reportCsv = await axios.post(url + "csv", FileCsv, {
            headers: {
                Authorization: token
            }
        })
        return reportCsv
    } catch (error) {
        throw error
    }
}

export async function getReports(query: queryMongoDB, token: string) {
    try {
        const reports = await axios.get(url, {
            headers: {
                Authorization: token
            },
            params:query
        })
        return reports
    } catch (error) {
        throw error
    }
}