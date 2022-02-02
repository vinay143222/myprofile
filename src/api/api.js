import axios from 'axios';
axios.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token} `;
    }
    return req;
})
export const Signin = (user) => {
    return axios.post('http://localhost:5000/auth', user);
}
export const Login = (user) => {
    return axios.post('http://localhost:5000/auth/login', user);
}
export const sendmail = (user) => {
    return axios.post("http://localhost:5000/auth/send_mail", user);
}
export const ChangePassword = (user) => {
    return axios.post("http://localhost:5000/auth/change_password", user);
}