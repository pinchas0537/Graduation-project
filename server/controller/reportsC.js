import { createReport } from "../services/reportS.js"

export async function sendingReport(req, res) {
    try {
        const { category, urgency, message, userId } = req.body
        const reportData = { category, urgency, message, userId }
        let images;
        if (req.files !== null) {
            // for (const key in req.files) {
            //     image = req.files[key]
            // }
            images = req.files
            reportData.images = images
        }
        const report = await createReport(reportData)
        return res.json(report)
    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: error.message })
    }
}