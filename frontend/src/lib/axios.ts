import axios from 'axios'

type User = {
    name: string,
    email: string,
    password: string
}

export async function registerUser(dto: User): Promise<any> {
    console.log(123);
    
    const res = await axios.post('http://localhost:3000/auth/register/', dto);
    console.log(res);
}