import axios, { type AxiosResponse } from "axios"
import type { Login } from "../types/loginType";

const url = "http://localhost:8080/auth"

export async function login(login: Login){
       try {
         const loginUser = await axios.post(url+"/login",login ,{
             headers: {
                 "Content-Type": "application/json"
             }
         })
         return loginUser
       } catch (error) {
        throw error
       }
}

export async function meLogin(tokon:string):Promise<AxiosResponse<any, any, {}>> {
   try {
     const authMe = await axios.get(url+"/me",{
         headers:{
             Authorization:tokon
         }
     })
     return authMe
   } catch (error) {
    throw error
   }
}