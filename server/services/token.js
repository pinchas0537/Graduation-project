import jwt from "jsonwebtoken"

export function signToken(payload = {}, secretOrPrivateKey, options = {}) {
    try {
        const token = jwt.sign({ role: payload.role, agentCode: payload.agentCode }, secretOrPrivateKey, options)
        return token
    } catch (error) {
        throw error
    }
}

export function verifyToken(token, secretOrPublicKey) {
    try {
        const verify = jwt.verify(token, secretOrPublicKey)
        return verify
    } catch (error) {
        throw error
    }
}