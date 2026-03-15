import { useState } from "react"
import { getReports } from "../api/report"
import { useGlobalToken, useGlobalUserT } from "../globalStore/useGlobalToken"
import type { queryMongoDB } from "../types/UpdateOneFile"
import Input from "../component/Input"
import Button from "../component/button"
import { isAxiosError } from "axios"
import type { ReturenReport } from "../types/ReturenNewReport"
import { Link } from "react-router"

export default function MyReports() {
  const { token } = useGlobalToken()
  const { user } = useGlobalUserT()
  const [Query, setQuery] = useState("")
  const [Params, setQueryParams] = useState("")
  const [data, setData] = useState<ReturenReport[]>([])
  async function getAllReports() {
    try {
      const query: queryMongoDB = {
        id: user!._id,
        queryParams: Params,
        query: Query
      }
      const reports = await getReports(query!, token!)
      setData(reports.data)
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.Error);
      }
      console.error(error);
    }
  }

  return (
    <>
      {data.length === 0 ? (
        <form className="login" onSubmit={async (e) => {
          e.preventDefault()
          await getAllReports()
          setQuery("")
          setQueryParams("")
        }}>
          <div className="input-row">
            <Input value={Query} setValue={setQuery} className="input" placeholderInput="enter query" required={true} />
          </div>
          <select value={Params} className="input" onChange={e => setQueryParams(e.target.value)} required>
            <option value="">queryParams</option>
            <option value="category">category</option>
            <option value="urgency">urgency</option>
            <option value="message">message</option>
          </select>
          <Button typeButton="submit" classN="button" name="sort" />
        </form>
      ) : (
        <>
          <h1 className="reports-title">נמצאו {data.length} דיווחים</h1>
          {data.map((report, index) => (
            <div className="user-card">
              <h2 className="success-title">דיווח {index + 1}</h2>
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
          ))}
        </>)}
    </>
  )
}