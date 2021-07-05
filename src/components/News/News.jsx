import React from 'react'
import s from './news.module.css'
import Post from './post/Post.jsx'
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../redux/news-reducer';




export default function News(props) {
    let postEl = props.NewsPages.posts.map(p => {
        return <Post message={p.message} likes={p.likes} />
    })

    let NewPostEl = React.createRef();
    let addPost = () =>{
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () =>{
        let text = NewPostEl.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={s.block}>
            <div className={s.news}>
                <div className={s.add}>
                    <textarea onChange={onPostChange} name="" ref={NewPostEl} value={props.NewsPages.newPostText}  placeholder="Tell me smt">
                    </textarea>
                    <button onClick={addPost}>post</button>
                </div>
                {postEl}
            </div>
            <div className={s.rightside}>
                gfgfgf
            </div>
        </div>
    )
}
