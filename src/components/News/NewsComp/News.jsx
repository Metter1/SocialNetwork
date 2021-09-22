import React, { useState } from 'react'
import s from '../news.module.css'
import Post from './post/Post.jsx'
import { NavLink } from 'react-router-dom';




export default function News(props) {
    const [Mode, setMode] = useState(false);

    let postEl = props.posts.map(p => {
        return <Post message={p.message} key={p.id} likes={p.likes} />
    })

    let NewPostEl = React.createRef();
    let addPost = () => {
        let id = props.posts.length + 1;
        props.addPost(id)
    }

    let onPostChange = () => {
        let text = NewPostEl.current.value;
        props.updateNewPostText(text)
    }

    // let inputProps = {
    //     onBlur={()=>setMode(true)}
    // }
    // if(NewPostEl){
    //     inputProps.disabled = true;
    // }
    const [RightMode, setRightMode] = useState(false)

    return (
        <div className={s.block}>
            <div className={s.news}>
                {
                    Mode
                        ? <div className={s.newPost_active}>
                            <img className={s.imgProfile} src={props.authPhoto} alt={props.authName} />
                            <textarea className={s.newPost} maxLength='200' type="text" placeholder="Что у вас нового?" autoFocus={true}
                                onBlur={() => props.newPostText ? setMode(true) : setMode(false)}
                                ref={NewPostEl} value={props.newPostText} onChange={onPostChange} />
                            <button className={s.news_btn} disabled={props.newPostText ? false : true}
                                onClick={() => { addPost(); setMode(false) }}>Опубликовать</button>
                        </div>
                        : <div className={s.newPost} >
                            <NavLink to={'/profile/' + props.UserId}>
                                <img className={s.imgProfile} src={props.authPhoto} alt={props.authName} />
                            </NavLink>
                            <input className={s.newPost_title} type="text"
                                ref={NewPostEl} value={props.newPostText} onChange={onPostChange}
                                placeholder="Что у вас нового?" onClick={() => setMode(true)} />
                        </div>
                }
                {postEl}
            </div>
            <div className={s.rightside} >
                <div className={s.rightside_item} onClick={() => setRightMode(!RightMode)}>
                    <span>Новости</span>
                    {
                        RightMode
                            ? <ul>
                                <li>
                                    sdsd
                                </li>
                                <li>
                                    sdsd
                                </li>
                                <li>
                                    sdsd
                                </li>
                                <li>
                                    sdsd
                                </li>
                            </ul>
                            : null
                    }
                </div>
            </div>
        </div>
    )
}
// <div>
// <textarea  name=""    placeholder="Tell me smt">
//</textarea>

// </div>