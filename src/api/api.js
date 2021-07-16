import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c1eaf6da-148d-4a7c-ae40-1fdcc6756cb9'
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    Follow(id) {
        return instance.post(`follow/` + id).then(response => response.data)
    },
    unFollow(id) {
        return instance.delete(`follow/` + id).then(response => response.data)
    }
}


export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/` + id).then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`profile/status/` + id)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
    }
}

//header
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(email, password, remember) {
        return instance.post(`auth/login`, {email, password, remember})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}   
