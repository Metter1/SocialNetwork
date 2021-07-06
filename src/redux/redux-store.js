import { combineReducers, createStore } from "redux";
import messengerReducer from './messenger-reducer'
import newsReducer from './news-reducer';

let reducers = combineReducers({
    NewsPage: newsReducer,
    MessengerPage: messengerReducer
});

let store = createStore(reducers);

export default store;