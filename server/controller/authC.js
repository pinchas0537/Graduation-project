import { creataUser } from "../services/authS.js"

export async function login(req,res){
   try {
     const {agentCode, password} = req.body
     const create = await creataUser({agentCode,password})
     return res.status(200).json({token:create.token,user:{id:create.insert.insertedId}})
   } catch (error) {
    return res.status(500).json({message:error.message})
   }
}