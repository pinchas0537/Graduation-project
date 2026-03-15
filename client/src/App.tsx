import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import AdminUser from "./pages/AdminUser";
import ResultCreate from "./pages/ResultCreate";
import NewReport from "./pages/NewReport";
import AgentDeshbord from "./pages/AgentDeshbord";
import AdminDashboard from "./pages/AdminDashboard";
import ResultSendReport from "./pages/ResultSendReport";
import CSVUpload from "./pages/CSVUpload";
import { AdminProtectedRoutes, AgentProtectedRoutes, ProtectedRoutes } from "./component/ProtectedRoutes";
import AuthMe from "./component/AuthMe";
import MyReports from "./pages/MyReports";
import Home from "./pages/Home";

export default function App() {
  return (
    <AuthMe>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/adminCreate" element={<ProtectedRoutes><AdminProtectedRoutes><AdminUser /></AdminProtectedRoutes></ProtectedRoutes>} />
        <Route path="/registrationcompleted" element={<ProtectedRoutes><AdminProtectedRoutes><ResultCreate /></AdminProtectedRoutes></ProtectedRoutes>} />
        <Route path="/createreport" element={<ProtectedRoutes><NewReport /></ProtectedRoutes>} />
        <Route path="/agentdeshbord" element={<ProtectedRoutes><AgentProtectedRoutes><AgentDeshbord /></AgentProtectedRoutes></ProtectedRoutes>} />
        <Route path="/admindeshbord" element={<ProtectedRoutes><AdminProtectedRoutes><AdminDashboard /></AdminProtectedRoutes></ProtectedRoutes>} />
        <Route path="/successsendreport" element={<ProtectedRoutes><ResultSendReport /></ProtectedRoutes>} />
        <Route path="/agent/csvupload" element={<ProtectedRoutes><AgentProtectedRoutes><CSVUpload /></AgentProtectedRoutes></ProtectedRoutes>} />
        <Route path="/admin/csvupload" element={<ProtectedRoutes><AdminProtectedRoutes><CSVUpload /></AdminProtectedRoutes></ProtectedRoutes>} />
        <Route path="/agent/allreport" element={<ProtectedRoutes><AgentProtectedRoutes><MyReports/></AgentProtectedRoutes></ProtectedRoutes>}/>
      </Routes>
    </AuthMe>
  )
}