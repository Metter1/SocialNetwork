import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import messengerReducer from './messenger-reducer'
import newsReducer from './news-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    NewsPage: newsReducer,
    MessengerPage: messengerReducer,
    usersPage: usersReducer,
    profilePage: profileReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;