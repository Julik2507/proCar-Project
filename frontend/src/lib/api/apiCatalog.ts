import axios from 'axios'

export async function apiGetBrand(id:number) {
    try {
        const result = await axios.get(`http://176.109.107.106:3000/brands/get-brand?brand=${id}`);
        return result.data;
    } catch(err:any) {
        throw err;
    }
}