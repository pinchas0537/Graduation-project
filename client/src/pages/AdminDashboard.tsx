import { useGlobalUserT } from "../globalStore/useGlobalToken"
import Button from "../component/button"
import { Navigate, useNavigate } from "react-router"
export default function AdminDashboard() {
    const { user } = useGlobalUserT()
    const navigate = useNavigate()
    return (
        <>
            {user?.role === "admin" ? (
                <>
                    <div className="user-card">
                        <h2 className="success-title">התחברת בהצלחה!</h2>
                        <div className="user-details">
                            <p><strong>ID:</strong>{user!._id}</p>
                            <p><strong>קוד סוכן:</strong>{user!.agentCode}</p>
                            <p><strong>שם משתמש:</strong>{user!.fullName}</p>
                            <p><strong>הרשאה:</strong>{user!.role}</p>
                        </div>
                    </div>
                    <Button classN="button ad" name="יצירת סוכן חדש" onClick={() => {
                        navigate("/adminCreate")
                    }} />
                </>
            ) : (<Navigate replace to="/login" />)}
        </>
    )
}
