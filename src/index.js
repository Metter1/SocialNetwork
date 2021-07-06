import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store'



let reRenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App 
            state={state} 
            dispatch={store.dispatch.bind(store)} 
            store = {store}
            />
        </BrowserRouter>, document.getElementById('root'));
}

reRenderTree(store.getState());

store.subscribe(() =>{
    reRenderTree(store.getState())
});