export function errorReq(req, res, next) {
    try {
        const { agentCode, fullName, role, password } = req.body
        if (password !== undefined) {
            if (password.trim() === "" || typeof password !== "string") {
                return res.status(400).json({ Error: "password is invalid" })
            }
        }
        if (!agentCode || !fullName || !role) return res.status(400).json({ Error: "One or more of the inputs were not entered correctly!" })
        if (typeof agentCode !== "string" || typeof fullName !== "string" || typeof role !== "string") return res.status(401).json({ Error: "Invalid input was entered." })
        if (agentCode.trim() === "" || fullName.trim() === "" || (role !== "admin" && role !== "agent")) return res.status(400).json({ Error: "One or more of the inputs are incorrect!" })
        next()
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}