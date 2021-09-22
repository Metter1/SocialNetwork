import { profileAPI } from "../api/api";

const SET_AUTH_USER_PROFILE = 'SET_AUTH_USER_PROFILE'
const SAVE_AUTH_PHOTO_SUCCESS = 'SAVE_AUTH_PHOTO_SUCCESS'
const SET_AUTH_STATUS = 'SET_AUTH_STATUS'
const initialStore = {
    AuthProfile: null,
    status: "",
}
const AuthProfileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_AUTH_USER_PROFILE:
            return { ...state, AuthProfile: action.profile }
        case SAVE_AUTH_PHOTO_SUCCESS:
            return { ...state, AuthProfile: { ...state.AuthProfile, photos: action.photos } }
        case SET_AUTH_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}
const setAuthUserStatus = (status) => ({ type: SET_AUTH_STATUS, status })

const setAuthUserProfile = (profile) => ({ type: SET_AUTH_USER_PROFILE, profile })

export const savePhotoSuccess = (photos) => ({ type: SAVE_AUTH_PHOTO_SUCCESS, photos })


export const getAuthUserProfile = (userID) => async (dispatch) => {
    const data = await profileAPI.getProfile(userID)
    dispatch(setAuthUserProfile(data));
}

export const getAuthUserStatus = (userID) => async (dispatch) => {
    const response = await profileAPI.getStatus(userID)
    dispatch(setAuthUserStatus(response.data));
}
export const updateAuthUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhotos(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile, userID) => async (dispatch, getState) => {
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserProfile(userID))
    } else {
        return Promise.reject(response.data.messages[0]);
    }
}

export default AuthProfileReducer;