import React from 'react'
import s from '../news.module.css'
import Post from './post/Post.jsx'




export default function News(props) {
    let postEl = props.posts.map(p => {
        return <Post message={p.message} key={p.id} likes={p.likes} />
    })

    let NewPostEl = React.createRef();
    let addPost = () =>{
        props.addPost()
    }

    let onPostChange = () =>{
        let text = NewPostEl.current.value;
        props.updateNewPostText(text)
    }
    return (
        <div className={s.block}>
            <div className={s.news}>
                <div className={s.add}>
                    <textarea onChange={onPostChange} name="" ref={NewPostEl} value={props.newPostText}  placeholder="Tell me smt">
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
