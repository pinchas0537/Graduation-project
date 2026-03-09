import type { Create } from "./createType"
import type { RuternUser } from "./RuternUser"

export type UserStore = {
    createUser: RuternUser| Create| null,
    setCreateUser: (user: RuternUser| Create) => void
}