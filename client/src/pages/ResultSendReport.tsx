import { useGlobalSendReport } from "../globalStore/useGlobalSendReport"

export default function ResultSendReport() {
    debugger
    const { report } = useGlobalSendReport()
    if (!report) return <div>טוען נתונים...</div>
    return (
        <div className="user-card">
            <h2 className="success-title">ההודעה נשלחה בהצלחה</h2>
            <div className="user-details">
                <p><strong>ID:</strong> {report.data.id}</p>
                <p><strong>קטגוריה:</strong> {report.data.category}</p>
                <p><strong>נוצר ב:</strong> {report.data.createdAt}</p>
                <p><strong>לינק לתמונה:</strong> {report.data.imagePath}</p>
                <p><strong>תוכן ההודעה:</strong> {report.data.message}</p>
                <p><strong>סוג המקור:</strong> {report.data.sourceType}</p>
                <p><strong>דחיפות:</strong> {report.data.urgency}</p>
                <p><strong>מזהה משתמש:</strong> {report.data.userId}</p>
            </div>
        </div>
    )
}
