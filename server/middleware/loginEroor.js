export function errorReq(req, res, next) {
    const { agentCode, password } = req.body
    if (!agentCode || !password) return res.status(400).json({ message: "One or more of the inputs were not entered correctly!" })
    else if (typeof agentCode !== "string" || typeof password !== "string") return res.status(401).json({ message: "Invalid input was entered." })
    else if (agentCode.trim() === "" || password.trim() === "") return res.status(400).json({ message: "One or more of the inputs are incorrect!" })
    next()
}
