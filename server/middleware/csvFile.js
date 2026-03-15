import csv from "async-csv"
import { verifyToken } from "../services/token.js";
import { config } from "dotenv";
config()
export async function csvFile(req, res, next) {
    try {
        const {userId} = req.body
        if(!userId) return res.status(401).json({Error:"user ID not sent."})
        const token = req.headers.authorization;
        if (!token || token === "") return res.status(401).json({ Error: "The token is missing or invalid." })
        const verify = verifyToken(token, process.env.SECRET_JWT)
        if (verify.role !== "agent" && verify.role !== "admin") return res.status(401).json({ Error: "No appropriate permission" })
        const files = req.files
        if (!files) return res.status(400).json({ Error: "File not sent." })
        let file;
        for (const key in files) {
            file = files[key]
        }
        if (!file.mimetype.endsWith("csv")) return res.status(400).json({ Error: "The file is not supported because it is not a csv file." })
        const csvString = file.data.toString("utf-8")
        const rows = await csv.parse(csvString, {
            columns: true,
            trim: true,
            skip_empty_lines: true,
            skip_lines_with_error: true
        })
        if (rows.length === 0) return res.status(400).json({ Error: "The file is empty." })
        const columns = ["category", "urgency", "message"]
        const keys = Object.keys(rows[0])
        const missingColumns = keys.filter(colum => !columns.includes(colum))
        if (missingColumns.length > 0) res.status(400).json({ Error: "Missing columns" })
        req.files = rows
        next()
    } catch (error) {
        return res.status(500).json({ Error: error.message })
    }
}