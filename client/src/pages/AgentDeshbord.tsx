import { Navigate, useNavigate } from "react-router"
import { useGlobalUserT } from "../globalStore/useGlobalToken"
import Button from "../component/button"

export default function AgentDeshbord() {
    const navigate = useNavigate()
    const { user } = useGlobalUserT()
    return (
        <>
            {user !== null ? (
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
                    <nav className="nevad">
                        <Button onClick={() => {
                            navigate("/createreport")
                        }} classN="button ad" typeButton="button" name="שליחת דיווח ידני" />
                        <Button classN="button ad" typeButton="button" name="העלת קובץ csv" />
                        <Button classN="button ad" typeButton="button" name="לראות את כל הדיווחים שלי" />
                    </nav>
                </>
            ) : (
                <Navigate replace to="/login" />
            )
            }
        </>
    )
}
