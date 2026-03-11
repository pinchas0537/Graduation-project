import type { MouseEventHandler } from "react"

export type Button = {
    typeButton?:"button" | "submit" | "reset",
    name?:string,
    classN?:string
    onClick?:MouseEventHandler<HTMLButtonElement>
}