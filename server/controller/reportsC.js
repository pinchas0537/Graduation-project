import { createReport, csvReport, getReportById, getReportFiltering } from "../services/reportS.js"

export async function sendingReport(req, res) {
    try {
        const { category, urgency, message, userId } = req.body
        const reportData = { category, urgency, message, userId }
        let images;
        if (req.files !== null) {
            images = req.files
            reportData.images = images
        }
        const report = await createReport(reportData)
        return res.status(201).json(report)
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

export async function reportCsv(req, res) {
    try {
        const { userId } = req.body
        const csv = req.files
        const report = await csvReport(csv, userId)
        res.status(201).send(report)
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

export async function reportFiltering(req, res) {
    try {
        const { queryParams, query ,id} = req.query
        const role = req.user
        const result = await getReportFiltering(queryParams, query, role,id)
        res.send(result)
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

export async function reportFilterById(req, res) {
    try {
        const { id } = req.params
        const result = await getReportById(id)
        res.send(result)
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}