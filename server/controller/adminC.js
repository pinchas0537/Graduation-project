import { createUser, findAllAgents, hashingPassword } from "../services/admin.js"

export async function createNewUser(req, res) {
    const { agentCode, fullName, role ,password} = req.body
    const hashPassword = hashingPassword(password)
    const user = await createUser({agentCode,fullName,role ,hashPassword})
    res.status(201).json({user:{id:user,agentCode,fullName,role,password}})
}

export async  function getAll(req,res){
    const all = await findAllAgents()
    return res.status(200).json({agents:all})
}