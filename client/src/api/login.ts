import type { Login } from "../types/loginType";

export async function login({ agentCode, password }: Login) {
    try {
        const loginUser = await fetch("http://localhost:8080/auth/login", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({ agentCode, password })
        })
        const rusult = await loginUser.json()
        return rusult
    } catch (error) {
        console.error(error)
    }
}