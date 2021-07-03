import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { addPost, updateNewPostText } from './redux/state'


 let reRender = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}


export default reRender;