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
            let newPost = {
                id: 4,
                message: state.newPostText,
                likes: 0,
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default newsReducer