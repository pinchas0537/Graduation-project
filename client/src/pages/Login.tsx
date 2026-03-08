import { useState } from "react";
import Input from "../component/Input";
import Button from "../component/button"
import { login } from "../api/login";
import { useGlobalStore } from "../globalStore/useGlobalstore"
export default function Login() {
    const {setToken } = useGlobalStore()
    const [agentCode, setAgentCode] = useState("")
    const [password, setPassword] = useState("")

    async function loginUser() {
        const userLogin = await login({ agentCode, password })
        setToken(userLogin)
    }

    return (
        <form className="login" onSubmit={(e) => {
            e.preventDefault();
            loginUser()
        }}>
            <div className="InputContainer">
                <div className="input-row">
                    <Input setValue={setAgentCode} typeInput="text" placeholderInput="enter agentCode" />
                </div>
                <div className="input-row">
                    <Input setValue={setPassword} typeInput="password" placeholderInput="enter password" />
                </div>
                <div className="login-button-wrapper">
                    <Button classN="button" typeButton="submit" name="Login" />
                </div>
            </div>
        </form>
    )
}
