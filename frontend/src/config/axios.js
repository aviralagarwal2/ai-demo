import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
})

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); 
    console.log("🔑 Sending Token:", token); // Debugging
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    } else {
        console.warn("⚠️ No token found in localStorage!");
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;   