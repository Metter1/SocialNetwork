const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialStore = {
    posts: [
        {
            id: 1,
            message: `Lorem ipsum dolor sit, amet consectetur adipisicing elit 
            Dolore temporibus corporis magnam pariatur quas rerum rem iste ipsam, 
            iure ipsa aspernatur sint placeat magni natus doloremque nobis! Ea blanditiis 
            dolorum earum, corrupti consequuntur odio, eos totam a aspernatur delectus aliquid
             eligendi nisi. Enim corrupti odit maxime voluptatum, excepturi magni repellendus!`,
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
    newPostText: '',
}
const newsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostText = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, { id: action.id, message: newPostText, likes: 0 }],
                newPostText: '',
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
export const addPostActionCreator = (id) => ({ type: ADD_POST, id })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default newsReducer