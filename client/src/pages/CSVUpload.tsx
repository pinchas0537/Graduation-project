import { useRef } from "react"
import Button from "../component/button"
import { reportCsv } from "../api/report"
import { useGlobalToken, useGlobalUserT } from "../globalStore/useGlobalToken"
import { useGlobalSendReport } from "../globalStore/useGlobalSendReport"
import { isAxiosError } from "axios"
export default function CSVUpload() {
  const { token } = useGlobalToken()
  const { user } = useGlobalUserT()
  const { setReport } = useGlobalSendReport()
  const refFile = useRef<HTMLInputElement | null>(null)
  async function sendFileCsv() {
    try {
      const file = refFile.current?.files
      const fromData = new FormData()
      for (let i = 0; i < file!.length; i++) {
        fromData.append(`file-${i + 1}`, file![i])
      }
      fromData.append("userId", user!._id)
      const uploadFile = await reportCsv(fromData, token!)
      setReport(uploadFile.data)
      if (refFile.current?.value) {
        refFile.current.value = ""
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.Error);
      }
    }
  }

  return (
    <>
      <h1>CSV נא לעלות קובץ</h1>
      <form onSubmit={async (e) => {
        e.preventDefault()
        await sendFileCsv()
      }} className="login">
        <input type="file" id="upload-button" ref={refFile} accept=".csv" required />
        <Button classN="button" typeButton="submit" name="שליחה"></Button>
      </form>
    </>
  )
}