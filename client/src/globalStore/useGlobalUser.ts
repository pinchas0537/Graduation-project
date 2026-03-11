import { create } from "zustand"
import type { UserStore } from "../types/createUserStoreType"
import type { RuternUser } from "../types/RuternUser"
import type { Create } from "../types/createType"


export const useGlobalUser = create<UserStore>(

    (set) => ({
        createUser: null,
        setCreateUser: (user: RuternUser | Create) => set({ createUser: user }),
    })
)