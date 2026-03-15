import { useEffect, useState } from "react";
import Input from "../component/Input";
import Button from "../component/button"
import { login } from "../api/auth";
import { useGlobalToken, useGlobalUserT } from "../globalStore/useGlobalToken"
import { useNavigate } from 'react-router';
import { isAxiosError } from "axios";
export default function Login() {
    const { setToken } = useGlobalToken()
    const { setUser } = useGlobalUserT()
    const [agentCode, setAgentCode] = useState("")
    const [password, setPassword] = useState("")
    const [Error, setError] = useState("")
    const navigate = useNavigate()

    async function loginUser() {
        try {
            const userLogin = await login({ agentCode, password })
            if (userLogin?.headers.authorization) {
                localStorage.setItem("userToken", userLogin.headers.authorization)
                setToken(userLogin.headers.authorization)
            }
            if (userLogin?.data.user) {
                localStorage.setItem("user", JSON.stringify(userLogin.data.user))
                setUser(userLogin.data.user)
                if (userLogin.data.user.role === "admin") navigate("/admindeshbord")
                if (userLogin.data.user.role === "agent") navigate("/agentdeshbord")
            }
        } catch (error) {
            if (isAxiosError(error)) {
                setError(error.response?.data.Error)
            }
            else {
                console.error(error);
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("userToken")
        const userObj = localStorage.getItem("user")
        if (userObj && token) {
            const user = JSON.parse(userObj)
            if (user.role === "agent") {
                navigate("/agentdeshbord", { replace: true })
            }
            if (user.role === "admin") {
                navigate("/admindeshbord", { replace: true })
            }
        }
    }, [])

    return (
        <form className="login" onSubmit={async (e) => {
            e.preventDefault();
            await loginUser()
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
                    {Error}
                </div>
            </div>
        </form>

    )
}