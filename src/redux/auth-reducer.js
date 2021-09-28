
import { authAPI, securityAPI } from './../api/api';
import { getAuthUserProfile } from './authProfile-reducer';
const SET_USER_DATA = 'SET_USER_DATA';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
const SET_ERROR = 'SET_ERROR'
let initialStore = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    loginSuccess: null,
    captchaUrl: null,
    error: null,
}
const authReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, ...action.payload }
        case SET_USER_DATA:
            return { ...state, ...action.data, isAuth: action.data.isAuth }
        case LOGIN_SUCCESS:
            return { ...state, loginSuccess: action.loginSuccess }
        case GET_CAPTCHA_URL_SUCCESS:
            return { ...state, ...action.payload }

        default:
            return state
    }
}
export const setError = (error) => ({ type: SET_ERROR, payload: { error } })
export const setAuthUserData = (email, userID, login, isAuth) => ({ type: SET_USER_DATA, data: { email, userID, login, isAuth } })
export const setloginSuccess = (loginSuccess) => ({ type: LOGIN_SUCCESS, loginSuccess })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuthUserData = () => async (dispatch) => {

    const data = await authAPI.getAuth();

    if (data.resultCode === 0) {
        let { email, id, login } = data.data
        dispatch(setAuthUserData(email, id, login, true));
        dispatch(getAuthUserProfile(id));

    }
    return true
}
export const login = (email, password, remember, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, remember, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let m = Promise.reject(response.data.messages[0])
        dispatch(setError(response.data.messages[0]))
        return m;
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer