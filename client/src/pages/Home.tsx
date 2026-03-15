import { useNavigate } from "react-router"
import Button from "../component/button"
export default function Home() {
  const navigate = useNavigate()
  return (
    <>
    <h1 className="reports-title">ברוך הבא למערכת</h1>
    <Button classN="button home" name="להתחברות למערכת לחץ כאן" onClick={()=>{
      navigate("/login")
    }}/>
    </>
  )
}
