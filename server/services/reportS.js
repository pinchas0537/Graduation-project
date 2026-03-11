import { config } from "dotenv";
import { insertReport } from "../DAL/reportD.js";
config()
export async function createReport(reports = {}) {
    try {
        const { images, ...newReport } = reports
        const createdAt = new Date().toISOString()
        const sourceType = "form"
        const reportData = { ...newReport, createdAt, sourceType }
        const retureReport = {category:newReport.category,urgency:newReport.urgency,message:newReport.message,sourceType,createdAt,userId:newReport.userId}
        if(images){
            let image;
            const imagesPath = []
             for (const key in images) {
                image = images[key]
                const imageNameNet = image.name.replace(/\s+/g ,"")
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