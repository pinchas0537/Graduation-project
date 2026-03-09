import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import ResultCreate from "./pages/ResultCreate";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/adminCreate" element={<CreateUser/>}/>
      <Route path="/registrationcompleted" element={<ResultCreate />}/>
    </Routes>
  )
}
