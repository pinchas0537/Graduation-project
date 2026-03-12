import axios from "axios"
import type { ReturenReport } from "../types/ReturenNewReport"

export async function createRoport(fields: FormData): Promise<ReturenReport> {
    try {
        const report: ReturenReport = await axios.post("http://localhost:8080/reports/", fields)
        return report
    } catch (error) {
        throw error
    }
}

export async function reportCsv(FileCsv: File, token: string) {
    try {
        const reportCsv = await axios.post("http://localhost:8080/reports/csv", FileCsv, {
            headers: {
                Authorization: token
            }
        })
        return reportCsv
    } catch (error) {
        throw error
    }
}