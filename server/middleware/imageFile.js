import { config } from "dotenv";
import { verifyToken } from "../services/token.js";
config()

export function imageFile(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token || token === "") return res.status(401).json({ Error: "The token is missing or invalid." })
        const verify = verifyToken(token, process.env.SECRET_JWT)
        if (verify.role !== "agent" && verify.role !== "admin") return res.status(401).json({ Error: "No appropriate permission" })
        if (!req.files) return next()
        const images = req.files
        const validImages = {}
        const rejectedFiles = []
        for (const key in images) {
            const image = images[key]
            if (!image.mimetype.startsWith("image/")) {
                rejectedFiles.push(image.name)
                res.json({ Error: "The files that are not images were not uploaded." })
            }
            else {
                validImages[key] = image
            }
        }
        req.files = validImages
        next()
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}