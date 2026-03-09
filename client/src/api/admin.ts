import axios from "axios"

export async function adminCreate(user = {}) {
    const create = await axios.post("http://localhost:8080/admin/users",user,{
        headers:{
            "Content-Type": "application/json"
        }
    })
    debugger
    return create.data
}