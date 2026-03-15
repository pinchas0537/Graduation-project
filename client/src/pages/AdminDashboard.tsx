
import Button from "../component/button"
import { useNavigate } from "react-router"
import ReturenLogin from "../component/ReturenLogin"
export default function AdminDashboard() {

    const navigate = useNavigate()
    return (
        <>
                <>
                    <ReturenLogin />
                    <Button classN="button ad" name="יצירת סוכן חדש" onClick={() => {
                        navigate("/adminCreate")
                    }} />
                </>
        </>
    )
}
