export function reportError(req, res, next) {
    try {
        const { category, urgency, message } = req.body
        if (!category || !urgency || !message) return res.status(400).json({ Error: "One or more of the inputs were not entered correctly!" })
        if (typeof category !== "string" || typeof urgency !== "string" || typeof message !== "string") return res.status(401).json({ Error: "Invalid input was entered." })
        if (category.trim() === "" || urgency.trim() === "" || message.trim() === "") return res.status(400).json({ Error: "One or more of the inputs are incorrect!" })
        next()
    } catch (error) {
        return res.status(500).json({ Error: error.message })
    }
}