import axios from 'axios';
const axioApi = axios.create({  
        baseURL: 'https://ai-shop2.herokuapp.com/api/',
        //baseURL: 'https://mern-stack-course.herokuapp.com/api/',  // let our base uri is server uri
        //baseURL: 'https://jsonplaceholder.typicode.com/',
        timeout: 10000,
        withCredentials: true,
        //transformRequest: [(data) => JSON.stringify(data.data)],
        // headers: {
        // 	'Accept': 'application/json',
        // 	'Content-Type': 'application/json',
        // }
});
export default axioApi