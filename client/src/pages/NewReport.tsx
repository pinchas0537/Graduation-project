import { useRef, useState } from "react"
import Input from "../component/Input"
import { createRoport } from "../api/report"
import { useGlobalToken, useGlobalUserT } from "../globalStore/useGlobalToken"
import { useNavigate } from "react-router"
import { useGlobalSendReport } from "../globalStore/useGlobalSendReport"
import { isAxiosError } from "axios"

export default function NewReport() {
    const { user } = useGlobalUserT()
    const { token } = useGlobalToken()
    const refFile = useRef<HTMLInputElement | null>(null)
    const [category, setCategory] = useState("")
    const [message, setMessage] = useState("")
    const [urgency, setUrgency] = useState("")
    const { setReport } = useGlobalSendReport()
    const [Error, setError] = useState("")
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
            const create = await createRoport(fromData, token!)
            setReport(create.data);
            if(refFile.current?.value){
                refFile.current.value = ""
            }
        } catch (error) {
            if (isAxiosError(error)) {
                setError(error.response?.data.Error)
            }
            else {
                console.error(error)
            }
        }
    }

    return (
        <>
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
                <div className="error">
                    {Error}
                </div>
                 <div className="error">
                    {Error}
                </div>
            </form>
        </>
    )
}