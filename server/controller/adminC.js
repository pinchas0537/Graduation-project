export function createNewUser(req, res) {
    const { agentCode, fullName, role ,password} = req.body
  
    res.status(201).json({})
}