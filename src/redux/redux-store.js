import { combineReducers, createStore } from "redux";
import messengerReducer from './messenger-reducer'
import newsReducer from './news-reducer';
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    NewsPage: newsReducer,
    MessengerPage: messengerReducer,
    usersPage: usersReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;
export default store;