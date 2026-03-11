import { useState } from "react"
import Input from "../component/Input"
import Button from "../component/button"
import { adminCreate } from "../api/admin"
import type { Create } from "../types/createType"
import { useGlobalUser } from "../globalStore/useGlobalUser"
import { useNavigate } from "react-router"
import { useGlobalToken, useGlobalUserT } from "../globalStore/useGlobalToken"
import { Navigate } from "react-router"

export default function CreateUser() {
    const { token } = useGlobalToken()
    const { user } = useGlobalUserT()
    const [agentCode, setAgentCode] = useState("")
    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")
    const { setCreateUser } = useGlobalUser()
    const [role, setRole] = useState("")
    const naviget = useNavigate()
    async function crata(user: Create) {
        const crated: Create = await adminCreate(user, token)
        setCreateUser(crated)
    }

    return (
        <>
            {user?.role === "admin" ? (
                <>
                    <form className="login create" onSubmit={async (e) => {
                        e.preventDefault()
                        await crata({ agentCode, fullName, password, role })
                        setAgentCode("")
                        setFullName("")
                        setPassword("")
                        setRole("")
                        naviget("/registrationcompleted")
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
                    </form>
                </>
            ) : (<Navigate to="/login" replace></Navigate>)}
        </>
    )
}