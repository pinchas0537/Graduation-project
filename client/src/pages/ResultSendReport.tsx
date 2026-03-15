import { Link } from "react-router"
import { useGlobalSendReport } from "../globalStore/useGlobalSendReport"

export default function ResultSendReport() {
    const { report } = useGlobalSendReport()
    return (
        <div className="user-card">
            <h2 className="success-title">ההודעה נשלחה בהצלחה</h2>
            <div className="user-details">
                <p><strong>ID:</strong> {report!._id}</p>
                <p><strong>קטגוריה:</strong> {report!.category}</p>
                <p><strong>נוצר ב:</strong> {report!.createdAt}</p>
                {!report!.imagesPath || report!.imagesPath.length === 0 ? (
                    <p><strong>לינק לתמונה:</strong>לא נשלח תמונה</p>
                ) : (
                    <>
                        <strong>{report!.imagesPath.length === 1 ? "לינק לתמונה:" : "לינקים לתמונות:"}</strong>
                        {report!.imagesPath.map((path, index) => (
                            <p>
                                <Link to={path} target="_blank">צפה בתמונה {index + 1}</Link>
                            </p>
                        ))}
                    </>
                )
                }
                <p><strong>תוכן ההודעה:</strong> {report!.message}</p>
                <p><strong>סוג המקור:</strong> {report!.sourceType}</p>
                <p><strong>דחיפות:</strong> {report!.urgency}</p>
                <p><strong>מזהה משתמש:</strong> {report!.userId}</p>
            </div>
        </div>
    )
}