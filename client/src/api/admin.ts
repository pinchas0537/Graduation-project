import axios from "axios"
import type { Create } from "../types/createType"

export async function adminCreate(user:Create,token:string) {
    try {
        const create = await axios.post("http://localhost:8080/admin/users",user,{
            headers:{
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
        return create.data
    } catch (error) {
        console.error(error)
    }
}