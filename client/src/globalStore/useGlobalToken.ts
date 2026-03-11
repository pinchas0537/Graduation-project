import { create } from "zustand"
import type { Token, User } from "../types/tokenStoreType"
import type { Agent } from "../types/AgentType"

export const useGlobalToken = create<Token>((set) => ({
    token: "",
    setToken: (token: string) => set({ token })
}))

export const useGlobalUserT = create<User>((set) => ({
    user:null,
    setUser:(user:Agent)=>set({user})
}))