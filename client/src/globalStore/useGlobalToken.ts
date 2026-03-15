import { create } from "zustand"
import type { Token, User } from "../types/tokenStoreType"
import type { Agent } from "../types/AgentType"

function getUser():Agent|null{
    const user = localStorage.getItem("user")
    if(!user) return null
    return JSON.parse(user) as Agent
}

export const useGlobalToken = create<Token>((set) => ({
    token: localStorage.getItem("userToken"),
    setToken: (token: string) => set({ token })
}))

export const useGlobalUserT = create<User>((set) => ({
    user:getUser(),
    setUser:(user:Agent|null)=>set({user})
}))