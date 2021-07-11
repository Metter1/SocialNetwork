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
    }
}

//header
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}



// componentDidMount() {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//         withCredentials: true
//     })
//         .then(response => {
//             if(response.data.resultCode === 0) {
//                 let {email, id, login} = response.data.data
//                 this.props.setAuthUserDaTa(email, id, login)
//             }
//         });
// }