import { profileAPI } from "../api/api";

const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE'

const initialStore = {
    AuthProfile: null,
}
const AuthProfileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_AUTH_USER_PROFILE:
            return {  AuthProfile: action.profile }
        
        default:
            return state;
    }
}

const setAuthUserProfile = (profile) => ({ type: SET_AUTH_USER_PROFILE, profile })


export const getAuthUserProfile = (userID) => async (dispatch) => {
    const data = await profileAPI.getProfile(userID)
    dispatch(setAuthUserProfile(data));
}

export default AuthProfileReducer;