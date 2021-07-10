const SET_USER_DATA = 'SET_USER_DATA';
let initialStore = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
}
const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: true }
        default:
            return state
    }
}
export const setAuthUserDaTa = (email, userID, login) => ({ type: SET_USER_DATA, data: { email, userID, login } })

export default authReducer