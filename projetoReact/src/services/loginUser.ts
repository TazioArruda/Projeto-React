
import { api } from "./api"
import { setToken } from "./authClient"


 export interface LoginProps {
    email:string
    password: string
 }

export async function loginUser({email,password}:LoginProps){
    const response = await api.post(`public/register/login?email=${email}&password=${password}`)
    await setToken(response.data.token)
}