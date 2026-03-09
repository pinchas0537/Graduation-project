import { create } from "zustand"
import type { token } from "../types/tokenStoreType"

export const useGlobalToken = create<token>((set) => ({
    token: "",
    setToken: (token: string) => set({ token })
}))