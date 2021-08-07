
import { authAPI } from './../api/api';
const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
let initialStore = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    loginSuccess: null
}
const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: action.data.isAuth }
        case LOGIN_SUCCESS:
            return { ...state, loginSuccess: action.loginSuccess }
        default:
            return state
    }
}
export const setAuthUserData = (email, userID, login, isAuth) => ({ type: SET_USER_DATA, data: { email, userID, login, isAuth } })
export const setloginSuccess = (loginSuccess) => ({ type: LOGIN_SUCCESS, loginSuccess })

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.getAuth();
    if (data.resultCode === 0) {
        let { email, id, login } = data.data
        dispatch(setAuthUserData(email, id, login, true))
    }
}

export const login = (email, password, remember, setStatus) => async (dispatch) => {
    const response = await authAPI.login(email, password, remember, setStatus)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else if (response.data.resultCode === 1) {
        dispatch(setloginSuccess(true));
    }
}
export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}



export default authReducer