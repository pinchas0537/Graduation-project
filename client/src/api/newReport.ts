import axios from "axios"
import type { ReturenReport } from "../types/ReturenNewReport"

export async function createRoport(fields: FormData):Promise<ReturenReport> {
    try {
        const report: ReturenReport= await axios.post("http://localhost:8080/reports/", fields)
        return report
    } catch (error) {
       throw error
    }
}