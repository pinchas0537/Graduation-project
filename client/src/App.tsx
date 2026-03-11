import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import AdminUser from "./pages/AdminUser";
import ResultCreate from "./pages/ResultCreate";
import NewReport from "./pages/NewReport";
import AgentDeshbord from "./pages/AgentDeshbord";
import AdminDashboard from "./pages/AdminDashboard";
import ResultSendReport from "./pages/ResultSendReport";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/adminCreate" element={<AdminUser/>}/>
      <Route path="/registrationcompleted" element={<ResultCreate />}/>
      <Route path="/createreport" element={<NewReport/>}/>
      <Route path="/agentdeshbord" element={<AgentDeshbord/>}/>
      <Route path="/admindeshbord" element={<AdminDashboard/>}/>
      <Route path="/successsendreport" element={<ResultSendReport/>}/>
    </Routes>
  )
}
