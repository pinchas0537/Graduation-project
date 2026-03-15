import { config } from "dotenv";
import { getById, getReportOnFiltering, insertReport } from "../DAL/reportD.js";
import csv from "async-csv"
config()

function dataOnReport() {
    const createdAt = new Date().toISOString()
    const sourceType = "form"
    return { createdAt, sourceType }
}

export async function createReport(reports = {}) {
    try {
        const { images, ...newReport } = reports
        const dataReport = dataOnReport()
        const reportData = { ...newReport, ...dataReport }
        const retureReport = { ...newReport, ...dataReport }
        if (images) {
            let image;
            const imagesPath = []
            for (const key in images) {
                image = images[key]
                const imageNameNet = image.name.replace(/\s+/g, "")
                await image.mv(`./public/${imageNameNet}`)
                const imagePath = `http://localhost:${process.env.PORT}/${imageNameNet}`
                imagesPath.push(imagePath)

                reportData.filesPhta = imagesPath
                retureReport.imagesPath = imagesPath
            }
        }
        const report = await insertReport(reportData)
        retureReport.id = report.insertedId.toString()
        return retureReport
    } catch (error) {
        throw error
    }
}

export async function csvReport(csvFile, userId) {
    try {
        const returnReport = { reports: [] }
        const repoerData = dataOnReport()
        const reportInsert = csvFile.map(async (row) => {
            const fromData = { ...row, ...repoerData, userId }
            const report = await insertReport(fromData)
            returnReport.reports.push(fromData)
            return report
        })
        const reports = await Promise.all(reportInsert)
        returnReport.importedCount = reports.length
        return returnReport
    } catch (error) {
        throw error
    }
}

export async function getReportFiltering(queryParams, query, role, id) {
    try {
        const queryFilter = { [queryParams]: query }
        if (role !== "admin") {
            queryFilter.userId = id
        }
        const result = await getReportOnFiltering(queryFilter)
        return result
    } catch (error) {
        throw error
    }
}

export async function getReportById(id) {
    try {
        const result = await getById(id)
        return result
    } catch (error) {
        throw error
    }
}