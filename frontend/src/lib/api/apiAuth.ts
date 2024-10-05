import axios from 'axios'
import { registerResponseDTO } from '../dto/authResponseDTO';

type User = {
    name: string,
    email: string,
    password: string
}

//process.env doesnt work!
const baseURL = "http://127.0.0.1:3000"

export async function apiRegisterUser(dto: User): Promise<registerResponseDTO> {
    try {
        const res =  await axios.post(`${baseURL}/auth/register/`, dto);
        localStorage.setItem('accessToken', res.data.accessToken);
        return res.data;

    } catch(err:any) {
        throw err;
    }

}

export async function apiLoginUser(dto: any) {
    try {
        const res = await axios.post(`${baseURL}/auth/login`, dto);
        localStorage.setItem("accessToken", res.data.accessToken);
        return res.data;
        
    } catch(err:any) {
        throw err;
    }
}

export async function apiLogoutUser() {
    try {
        await axios.delete(`${baseURL}/auth/logout`);
        localStorage.removeItem("accessToken");         
    } catch(err:any) {
        throw err;
    } //add token for request!

}