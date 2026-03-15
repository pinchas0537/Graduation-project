import type { JSX } from "react/jsx-runtime"
import { useNavigate } from "react-router"
import { useGlobalUserT } from "../globalStore/useGlobalToken"

export default function ReturenLogin():JSX.Element{
    const {user} = useGlobalUserT()
    const navigate = useNavigate()
    return (
        <>
        <button className="button exit" onClick={()=>(
            localStorage.removeItem("user"),
            localStorage.removeItem("userToken"),
            navigate("/login")
        )}>exit</button>
        <div className="user-card">
            <h2 className="success-title">התחברת בהצלחה!</h2>
            <div className="user-details">
                <p><strong>ID:</strong>{user!._id}</p>
                <p><strong>קוד סוכן:</strong>{user!.agentCode}</p>
                <p><strong>שם משתמש:</strong>{user!.fullName}</p>
                <p><strong>הרשאה:</strong>{user!.role}</p>
            </div>
        </div>
        </>
    )
}