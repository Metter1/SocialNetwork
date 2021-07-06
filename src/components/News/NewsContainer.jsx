import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/news-reducer';

import News from './NewsComp/News';

export default function NewsContainer(props) {
    let state = props.store.getState();
    
    let addPost = () =>{
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) =>{
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);
    }
    
    return (
        <div>
            <News 
            updateNewPostText = {onPostChange}
            addPost = {addPost}
            posts = {state.NewsPage.posts}
            newPostText = {state.NewsPage.newPostText} />
        </div>
    )
}
