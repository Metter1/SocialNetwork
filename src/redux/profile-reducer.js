import { profileAPI } from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialStore = {
    profile: null
}
const profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state;
    }
}

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const getUserProfile = (userID) => (dispatch) => {
    
    profileAPI.getProfile(userID).then(data => {
        dispatch(setUserProfile(data));
    })
}

export default profileReducer;