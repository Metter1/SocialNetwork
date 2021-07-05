import messengerReducer from "./messenger-reducer";
import newsReducer from "./news-reducer";


let store = {
    _state: {
        NewsPage: {
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
        },
        MessengerPage: {
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
                }
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
    },
    getState() {
        return this._state;
    },
    _callSub() {
        console.log('123');
        // function subscribe 
        // reload page
    },

    sub(observer) {
        this._callSub = observer;
        // reRenderFN
    },
    dispatch(action) {

        this._state.NewsPage = newsReducer(this._state.NewsPage, action)
        this._state.MessengerPage = messengerReducer(this._state.MessengerPage, action)
        this._callSub(this._state);
    }
}

//news


//message




window.store = store;


export default store;


