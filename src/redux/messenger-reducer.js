const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_POST_MESSAGE = 'ADD-POST-MESSAGE'

const messengerReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:

        state.newMessageText = action.newText;
        return state;

        default:
            return state;
    }
}
export const addMessageActionCreator = () => ({ type: ADD_POST_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })
export default messengerReducer