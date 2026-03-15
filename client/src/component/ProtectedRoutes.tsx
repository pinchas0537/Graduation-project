import { Navigate } from "react-router"
import type { Props } from "../types/Props"
import type { ReactNode } from "react"
import { useGlobalUserT } from "../globalStore/useGlobalToken"

export function ProtectedRoutes({ children }: Props): ReactNode {
  const token = localStorage.getItem("userToken")
  if (!token) {
    return <Navigate to="/login" replace />
  }
  else {
    return <>{children}</>
  }
}

export function AdminProtectedRoutes({ children }: Props): ReactNode {
  const { user } = useGlobalUserT()
  if (!user) return <Navigate to="/login" replace />
  if (user?.role === "agent") return <Navigate to="/agentdeshbord" replace />
  return <>{children}</>
}

export function AgentProtectedRoutes({ children }: Props): ReactNode {
  const { user } = useGlobalUserT()
  if (!user) return <Navigate to="/login" replace />
  if (user?.role === "admin") return <Navigate to="/admindeshbord" replace />
  return <>{children}</>
}