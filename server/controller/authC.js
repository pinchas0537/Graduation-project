import { loginUser } from "../services/authS.js"

export async function login(req,res){
   try {
     const {agentCode} = req.body
     const create = await loginUser(agentCode)
     return res.status(200).json({token:create.token,user:create.newObjUser})
   } catch (error) {
    return res.status(500).json({message:error.message})
   }
}

// export async function loginMe(req,res) {
//   const token = req.headers.authorization
// }