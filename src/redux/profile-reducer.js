import { profileAPI } from "../api/api";

const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SET_AUTH_USER_PHOTO = 'SET_AUTH_USER_PHOTO';
const SET_AUTH_USER_NAME = 'SET_AUTH_USER_NAME'

const initialStore = {
    profile: null,
    UserAuthPhoto: null,
    UserAuthName: null,
    status: "",
}
const profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: {...state.profile, photos: action.photos }}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_AUTH_USER_PHOTO:
            return { ...state, UserAuthPhoto: action.photo }
        case SET_AUTH_USER_NAME:
            return { ...state, UserAuthName: action.name }
        default:
            return state;
    }
}
const setAuthUserPhoto = (photo) => ({ type: SET_AUTH_USER_PHOTO, photo })
const setAuthUserName = (name) => ({ type: SET_AUTH_USER_NAME, name })

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setUserStatus = (status) => ({ type: SET_STATUS, status })

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userID, m) => async (dispatch) => {
    const data = await profileAPI.getProfile(userID)
    dispatch(setUserProfile(data));
    if(m === 'AUTH'){
        dispatch(setAuthUserPhoto(data.photos.small))
        dispatch(setAuthUserName(data.fullName))
    }
}
export const getUserStatus = (userID) => async (dispatch) => {
    const response = await profileAPI.getStatus(userID)
    dispatch(setUserStatus(response.data));
}
export const updateUserStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhotos(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userID = getState().auth.userID
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userID))
    }else {
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;