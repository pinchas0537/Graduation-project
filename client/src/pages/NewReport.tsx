import { useRef, useState } from "react"
import Input from "../component/Input"
import { createRoport } from "../api/newReport"
import { useGlobalUserT } from "../globalStore/useGlobalToken"
import { Navigate, useNavigate } from "react-router"
import { useGlobalSendReport } from "../globalStore/useGlobalSendReport"
import type { ReturenReport } from "../types/ReturenNewReport"

export default function NewReport() {
    const { user } = useGlobalUserT()
    const refFile = useRef<HTMLInputElement | null>(null)
    const [category, setCategory] = useState("")
    const [message, setMessage] = useState("")
    const [urgency, setUrgency] = useState("")
    const { setReport } = useGlobalSendReport()
    const navigate = useNavigate()
    async function newReport(): Promise<void> {
        try {
            const images = refFile.current?.files
            const fromData = new FormData()
            if (images && images.length > 0) {
                for (let i = 0; i < images.length; i++)
                    fromData.append(`image-${i + 1}`, images[i])
            }
            fromData.append("category", category)
            fromData.append("message", message)
            fromData.append("urgency", urgency)
            fromData.append("userId", user!._id)
            const create: ReturenReport = await createRoport(fromData)
            setReport(create);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {user?.role === "agent" ? (

                <form className="login" onSubmit={async (e) => {
                    e.preventDefault()
                    await newReport()
                    setCategory("")
                    setMessage("")
                    setUrgency("")
                    navigate("/successsendreport")

                }}>
                    <div className="input-row">
                        <Input value={category} className="input" setValue={setCategory} typeInput="text" placeholderInput="enter category" required={true} />
                    </div>
                    <div className="input-row">
                        <Input value={urgency} className="input" setValue={setUrgency} typeInput="text" placeholderInput="enter urgency" required />
                    </div>
                    <div className="input-row">
                        <Input value={message} className="input" setValue={setMessage} typeInput="text" placeholderInput="enter message" required />
                    </div>
                    <input multiple id="upload-button" accept="image/*" ref={refFile} type="file" />
                    <button className="button" type="submit">send</button>
                </form>
            ) : (
                <Navigate replace to="/login" />
            )}
        </>
    )
}