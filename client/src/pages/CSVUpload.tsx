import { useRef } from "react"

export default function CSVUpload() {
  const refFile = useRef<HTMLInputElement | null>(null)
  return (
    <form action="" className="login">
      <input type="file" id="upload-button" ref={refFile} accept=".csv" required />
    </form>
  )
}
