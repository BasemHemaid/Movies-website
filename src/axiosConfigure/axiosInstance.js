import axios from 'axios'

const Instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        "api_key":"bd4921cf8b1fbc048aa59f7f31bca49c"
    }
});

// Instance.interceptors.request.use((config)=>{
//     console.log(config)
//     return config;
// },(err)=>{
//     return Promise.reject(err)
// })

// Instance.interceptors.response.use((res)=>{
//     console.log(res)
//     return res;
// },(err)=>{
//     return Promise.reject(err);
// })

export default Instance;