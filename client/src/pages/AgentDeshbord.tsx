import { useNavigate } from "react-router"
import Button from "../component/button"
import ReturenLogin from "../component/ReturenLogin"

export default function AgentDeshbord() {
    const navigate = useNavigate()
    return (<>
        <ReturenLogin />
        <nav className="nevad">
            <Button onClick={() => {
                navigate("/createreport")
            }} classN="button ad" typeButton="button" name="שליחת דיווח ידני" />
            <Button onClick={() => navigate("/agent/csvupload")} classN="button ad" typeButton="button" name="העלת קובץ csv" />
            <Button onClick={()=>navigate("/agent/allreport")} classN="button ad" typeButton="button" name="לראות את כל הדיווחים שלי" />
        </nav>
    </>
    )
}