import { useEffect, useState, type ReactNode } from "react"
import { meLogin } from "../api/auth"
import { useGlobalUserT, useGlobalToken } from "../globalStore/useGlobalToken"
import type { Props } from "../types/Props"

export default function AuthMe({ children }: Props): ReactNode {
    const { setUser } = useGlobalUserT()
    const { setToken } = useGlobalToken()
    const [isLoding ,setIsLoding] = useState(true)
    useEffect(() => {
        async function fetchMe() {
            const token = localStorage.getItem("userToken")
            if (!token){
                setIsLoding(false)
                return
            } 
            try {
                const me = await meLogin(token!)
                const user = me.data.user
                setUser(user)
                setToken(token!)
                localStorage.setItem("user", JSON.stringify(user))
            } catch (error) {
                console.error(error);
                localStorage.clear()
                setUser(null)
                setToken("")
            } finally{
                setIsLoding(false)
            }
        }
        fetchMe()
    }, [])
    if(isLoding){
        return <div>טוען נתונים...</div>
    }
    return children
}
