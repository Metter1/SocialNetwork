
import { getAuthUserData } from './auth-reducer';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialStore = {
    initialized: false
}
const appReducer = (state = initialStore, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return { ...state, initialized: action.initialized }
        default:
            return state
    }
}
export const initializedSuccess = (initialized) => ({ type: INITIALIZED_SUCCESS, initialized })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess(true))
        })
}



export default appReducer