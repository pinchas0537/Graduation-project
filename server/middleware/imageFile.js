export function imageFile(req, res, next) {
    try {
        if (!req.files) return next()
        const images = req.files
        const validImages = {}
        const rejectedFiles = []
        for (const key in images) {
            const image = images[key]
            if (!image.mimetype.startsWith("image/")) {
                rejectedFiles.push(image.name)
                res.json({ message: "The files that are not images were not uploaded." })
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