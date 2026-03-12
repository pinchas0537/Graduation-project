export function loginError(req, res, next) {
    try {
        const { agentCode, password } = req.body
        if (!agentCode || !password) return res.status(400).json({ Error: "One or more of the inputs were not entered correctly!" })
        if (typeof agentCode !== "string" || typeof password !== "string") return res.status(401).json({ Error: "Invalid input was entered." })
        if (agentCode.trim() === "" || password.trim() === "") return res.status(400).json({ Error: "One or more of the inputs are incorrect!" })
        next()
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}
