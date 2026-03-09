import jwt from "jsonwebtoken"

export function signToken(payload = {}, secretOrPrivateKey, options = {}) {
    const token = jwt.sign({ role: payload.role, agentCode: payload.agentCode }, secretOrPrivateKey,options)
    return token
}

export function verifyToken(token,secretOrPublicKey){
    const verify = jwt.verify(token,secretOrPublicKey)
    return verify
}