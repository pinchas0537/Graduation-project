import type { Agent } from "./AgentType"

export type Token={
    token:string
    setToken:(token:string)=>void
}

export type User = {
    user:null|Agent,
    setUser:(user:Agent)=>void
}