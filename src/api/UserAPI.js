import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "f234da5f-9deb-4613-a189-6838918f2736"
    }
});

export const UserAPI = {
    getUser(pageNumber=1 , pageSize=10)
    {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => {
              return response;
            });
    },

    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response;
            });
    }
}