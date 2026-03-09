import { useState } from "react";
import Input from "../component/Input";
import Button from "../component/button"
import { login } from "../api/login";
import { useGlobalToken } from "../globalStore/useGlobalToken"
export default function Login() {
    const {setToken } = useGlobalToken()
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
                <div className="input-row input-row-login">
                    <Input className="input" setValue={setAgentCode} typeInput="text" placeholderInput="enter agentCode" required={true}/>
                </div>
                <div className="input-row input-row-login">
                    <Input className="input" setValue={setPassword} typeInput="password" placeholderInput="enter password" required={true}/>
                </div>
                <div className="login-button-wrapper">
                    <Button classN="button" typeButton="submit" name="Login" />
                </div>
            </div>
        </form>
    )
}
