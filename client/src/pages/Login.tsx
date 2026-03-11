import { useState } from "react";
import Input from "../component/Input";
import Button from "../component/button"
import { login } from "../api/login";
import { useGlobalToken, useGlobalUserT } from "../globalStore/useGlobalToken"
import { Navigate } from 'react-router';
export default function Login() {
    const { setToken } = useGlobalToken()
    const { user, setUser } = useGlobalUserT()
    const [agentCode, setAgentCode] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoggIn, setIsLogIn] = useState(false)

    async function loginUser() {
        try {
            const userLogin = await login({ agentCode, password })
            if (userLogin.token) setToken(userLogin.token)
            if (userLogin.user) setUser(userLogin.user)
            if (userLogin.error) {
                setError(userLogin.error)
                return
            }
            setIsLogIn(true)
        } catch {
            console.error({ "loginUser": error })
        }
    }
    if (isLoggIn) {
        if (user?.role === "agent") {
            return <Navigate replace to="/agentdeshbord" />
        }
        else if(user?.role === "admin"){
            return <Navigate replace to="/admindeshbord"/>
        }
        else{
            return
        }
    }

    return (
        <form className="login" onSubmit={async (e) => {
            e.preventDefault();
            loginUser()

        }}>
            <div className="InputContainer">
                <div className="input-row input-row-login">
                    <Input value={agentCode} className="input" setValue={setAgentCode} typeInput="text" placeholderInput="enter agentCode" required={true} />
                </div>
                <div className="input-row input-row-login">
                    <Input value={password} className="input" setValue={setPassword} typeInput="password" placeholderInput="enter password" required={true} />
                </div>
                <div className="login-button-wrapper">
                    <Button classN="button" typeButton="submit" name="Login" />
                </div>
                <div className="error">
                    {error}
                </div>
            </div>
        </form>

    )
}
