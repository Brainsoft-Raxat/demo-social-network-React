import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "f234da5f-9deb-4613-a189-6838918f2736"
    }
});

export const AuthAPI = {
    authCheck(){
        return instance.get(`auth/me`)
            .then(response => {
               return response.data;
            });
    },
    login(email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout(){
        return instance.delete('auth/login');
    }

}