import axios, { type AxiosResponse } from "axios"
import type { Create } from "../types/createType"
import type { queryMongoDB } from "../types/UpdateOneFile"

const url = "https://graduation-project-4ti5.onrender.com/admin/users"

export async function adminCreate(user: Create, token: string): Promise<AxiosResponse<any, any, {}>> {
    try {
        const create = await axios.post(url, user, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        })
        return create
    } catch (error) {
        throw error
    }
}

export async function getAll(token: string): Promise<AxiosResponse<any, any, {}>> {
    try {
        const allAgent = await axios.get(url, {
            headers: {
                Authorization: token
            }
        })
        return allAgent
    } catch (error) {
        throw error
    }
}

export async function updateAllFields(user: Create, token: string): Promise<AxiosResponse<any, any, {}>> {
    try {
        const successUpdate = await axios.put(url, user, {
            headers: {
                Authorization: token
            }
        })
        return successUpdate
    } catch (error) {
        throw error
    }
}

export async function updateOneField(filed: queryMongoDB, token: string): Promise<AxiosResponse<any, any, {}>> {
    try {
        const updateField = axios.patch(url, filed, {
            headers: {
                Authorization: token
            }
        })
        return updateField
    } catch (error) {
        throw error
    }
}

export async function deleteUser(id: string, token: string): Promise<AxiosResponse<any, any, {}>> {
    try {
        const successDelete = axios.delete(url, {
            headers: {
                Authorization: token
            },
            data: {
                id: id
            }
        })
        return successDelete
    } catch (error) {
        throw error
    }
}