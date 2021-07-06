import messengerReducer from "./messenger-reducer";
import newsReducer from "./news-reducer";


let store = {
    _state: {


    },
    // getState() {
    //     return this._state;
    // },
    _callSub() {
        console.log('123');
        // function subscribe 
        // reload page
    },

    subscribe(observer) {
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


