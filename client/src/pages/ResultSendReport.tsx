import { Link, Navigate } from "react-router"
import { useGlobalSendReport } from "../globalStore/useGlobalSendReport"
import { useGlobalUserT } from "../globalStore/useGlobalToken"

export default function ResultSendReport() {
    const { user } = useGlobalUserT()
    const { report } = useGlobalSendReport()
    return (
        <>
            {user !== null ? (
                <div className="user-card">
                    <h2 className="success-title">ההודעה נשלחה בהצלחה</h2>
                    <div className="user-details">
                        <p><strong>ID:</strong> {report!.data.id}</p>
                        <p><strong>קטגוריה:</strong> {report!.data.category}</p>
                        <p><strong>נוצר ב:</strong> {report!.data.createdAt}</p>
                        {!report!.data.imagesPath || report!.data.imagesPath.length === 0 ? (
                            <p><strong>לינק לתמונה:</strong>לא נשלח תמונה</p>
                        ) : (
                            <>
                                <strong>{report!.data.imagesPath.length === 1 ? "לינק לתמונה:" : "לינקים לתמונות:"}</strong>
                                {report!.data.imagesPath.map((path, index) => (
                                    <p>
                                        <Link to={path} target="_blank">צפה בתמונה {index + 1}</Link>
                                    </p>
                                ))}
                            </>
                        )
                        }
                        <p><strong>תוכן ההודעה:</strong> {report!.data.message}</p>
                        <p><strong>סוג המקור:</strong> {report!.data.sourceType}</p>
                        <p><strong>דחיפות:</strong> {report!.data.urgency}</p>
                        <p><strong>מזהה משתמש:</strong> {report!.data.userId}</p>
                    </div>
                </div>
            ) : (
                <Navigate to="/login" replace />
            )}
        </>
    )
}
