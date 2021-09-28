import { profileAPI } from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialStore = {
    profile: null,
    status: "",
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

export const getUserProfile = (userID) => async (dispatch) => {
    const data = await profileAPI.getProfile(userID)
    dispatch(setUserProfile(data));
}
export const getUserStatus = (userID) => async (dispatch) => {
    const response = await profileAPI.getStatus(userID)
    dispatch(setUserStatus(response.data));
}


export default profileReducer;