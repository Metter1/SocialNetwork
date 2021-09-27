const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST_MESSAGE = 'ADD-POST-MESSAGE'

let initialStore = {
    users: [
        {
            id: 1,
            name: 'Eugene'
        },
        {
            id: 2,
            name: 'Dima'
        },
        {
            id: 3,
            name: 'Sasha'
        },
        {
            id: 4,
            name: 'Vasya'
        },
    ],
    messages: [
        {
            id: 1,
            message: '21321'
        },
        {
            id: 2,
            message: 'fsdfs123'
        },
        {
            id: 3,
            message: 'gsgs'
        },
        {
            id: 4,
            message: 'vcxvx'
        }
    ],
    newMessageText: '',
}
const messengerReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_POST_MESSAGE:
            let newMessageText = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, { id: action.id, message: newMessageText}],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
        default:
            return state;
    }
}
export const addMessageActionCreator = (id) => ({ type: ADD_POST_MESSAGE, id })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export default messengerReducer