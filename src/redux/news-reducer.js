const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialStore = {
    posts: [
        {
            id: 1,
            message: 'Great',
            likes: 10
        },
        {
            id: 2,
            message: 'Lorem, ipsum.',
            likes: 15
        },
        {
            id: 3,
            message: 'Sapiente.',
            likes: 5
        }
    ],
    newPostText: ''
}
const newsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostText = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, {id: 4, message: newPostText}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default newsReducer