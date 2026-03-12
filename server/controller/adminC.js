import { createUser, deleteOne, editAllFields, editOneField, findAllAgents, hashingPassword } from "../services/admin.js"

export async function createNewUser(req, res) {
    try {
        const { agentCode, fullName, role, password } = req.body
        const hashPassword = hashingPassword(password)
        const user = await createUser({ agentCode, fullName, role, hashPassword })
        res.status(201).json({ user: { id: user, agentCode, fullName, role, password } })
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

export async function getAll(req, res) {
    try {
        const all = await findAllAgents()
        return res.status(200).json({ agents: all })
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

export async function updateOneField(req, res) {
    try {
        const { id, queryParams, query } = req.body
        const update = await editOneField(id, queryParams, query)
        return res.json({ message: update })
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

export async function updateAllFields(req, res) {
    try {
        const { id, agentCode, fullName, role ,password } = req.body
        const hashPassword = hashingPassword(password)
        const update = await editAllFields(id, {agentCode, fullName, role ,hashPassword})
        return res.json({ message: update })
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

export async function oneDelete(req, res) {
    try {
        const { id } = req.body
        const result = await deleteOne(id)
        return res.json({message:result})
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}