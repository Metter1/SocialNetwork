import { profileAPI } from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
let initialStore = {
    profile: null,
    status: ""
}
const profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setUserStatus = (status) => ({ type: SET_STATUS, status })


export const getUserProfile = (userID) => (dispatch) => {

    profileAPI.getProfile(userID)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}
export const getUserStatus = (userID) => (dispatch) => {
    profileAPI.getStatus(userID)
        .then(response => {
            dispatch(setUserStatus(response.data));
        })
}
export const updateUserStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status)

        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
}


export default profileReducer;