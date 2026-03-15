import { useState } from "react"
import Input from "../component/Input"
import Button from "../component/button"
import { adminCreate } from "../api/admin"
import type { Create } from "../types/createType"
import { useGlobalUser } from "../globalStore/useGlobalUser"
import { useNavigate } from "react-router"
import { useGlobalToken } from "../globalStore/useGlobalToken"
import { isAxiosError } from "axios"

export default function CreateUser() {
    const { token } = useGlobalToken()
    const [agentCode, setAgentCode] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const { setCreateUser } = useGlobalUser()
    const [role, setRole] = useState("")
    const naviget = useNavigate()
    const [Error, setError] = useState("")
    async function crata(user: Create) {
        try {
            const crated = await adminCreate(user, token!)
            setCreateUser(crated.data)
            setError("")
            return true
        } catch (error) {
            if (isAxiosError(error)) {
                setError(error.response?.data.Error)
            } else {
                setError("Unexpected server error")
            }
            return false
        }
    }

    return (
        <form className="login create" onSubmit={async (e) => {
            e.preventDefault()
            const isSuccess = await crata({ agentCode, fullName, password, role })
            if (isSuccess) {
                setAgentCode("")
                setFullName("")
                setPassword("")
                setRole("")
                naviget("/registrationcompleted")
            }
        }}>
            <div className="input-row">
                <Input value={agentCode} className="input" placeholderInput="enter agent code" required={true} setValue={setAgentCode} />
            </div>
            <div className="input-row">
                <Input className="input" value={fullName} placeholderInput="enter full Name" required={true} setValue={setFullName} />
            </div>
            <div className="input-row">
                <Input typeInput="password" value={password} className="input" placeholderInput=" enter password" required={true} setValue={setPassword} />
            </div>
            <select value={role} className="input input-row" onChange={e => setRole(e.target.value)} required>
                <option value="">role</option>
                <option value="admin">admin</option>
                <option value="agent">agent</option>
            </select>
            <Button typeButton="submit" name="create user" classN="button" />
            <div className="error">
                {Error}
            </div>
        </form>
    )
}