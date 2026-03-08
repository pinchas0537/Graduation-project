export function errorReq(req, res, next) {
    const { agentCode, fullName, role, password } = req.body
    if (password) {
        if (password.trim() === "" || typeof password !== "string") return res.status(400).json({ message: "password is invalid" })
    }
    else {
        if (!agentCode || !fullName || !role) return res.status(400).json({ message: "One or more of the inputs were not entered correctly!" })
        else if (typeof agentCode !== "string" || typeof fullName !== "string" || typeof role !== "string") return res.status(401).json({message:"Invalid input was entered."})
        else if (agentCode.trim() === "" || fullName.trim() === "" || role !== "admin" || role !== "agent") return res.status(400).json({ message: "One or more of the inputs are incorrect!" })
    }
    next()
}