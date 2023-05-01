import axios from 'axios';
const AXIOS = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ,
    headers: {
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        owner:process.env.NEXT_PUBLIC_API_OWNER
    }
})
export default AXIOS