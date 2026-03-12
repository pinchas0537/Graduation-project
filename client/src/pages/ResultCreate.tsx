import { Navigate } from "react-router";
import { useGlobalUser } from "../globalStore/useGlobalUser";

export default function ResultCreate() {
    const { createUser } = useGlobalUser()

    if (!createUser) return <Navigate to="/login" replace/>
    const userData = "user" in createUser ? createUser.user : createUser
    return (
        <div className="user-card">
            <h2 className="success-title">המשתמש נוצר בהצלחה</h2>
            <div className="user-details">
                <p><strong>ID:</strong> {userData.id}</p>
                <p><strong>קוד סוכן:</strong> {userData.agentCode}</p>
                <p><strong>שם משתמש:</strong> {userData.fullName}</p>
                <p><strong>תפקיד:</strong> {userData.role}</p>
                <p><strong>סיסמה:</strong> {userData.password}</p>
            </div>
        </div>
    )
}
