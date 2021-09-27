import React, { useState } from 'react'
import s from '../news.module.css'
import Post from './post/Post.jsx'
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export default function News(props) {
    const [Mode, setMode] = useState(false);
    let posts = props.posts;
    let allPosts = (posts) => {
        let postEl = posts.map(p => {
            return <Post message={p.message} key={p.id} likes={p.likes} />
        })
        return postEl
    }

    let NewPostEl = React.createRef();
    let addPost = () => {
        let id = props.posts.length + 1;
        props.addPost(id)
    }

    let onPostChange = () => {
        let text = NewPostEl.current.value;
        props.updateNewPostText(text)
    }

    //menu News/Recomend
    const [RightMode1, setRightMode1] = useState(true)
    const [RightMode2, setRightMode2] = useState(false)
    //ul Music/Friends and another
    const [MenuMode1, setMenuMode1] = useState(false)
    const [MenuMode2, setMenuMode2] = useState(false)
    const [MenuMode3, setMenuMode3] = useState(false)
    const [MenuMode4, setMenuMode4] = useState(false)
    const [MenuMode5, setMenuMode5] = useState(false)

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
                        : <div className={s.addnewPost} >
                            <NavLink to={'/profile/' + props.UserId}>
                                <img className={s.imgProfile} src={props.authPhoto} alt={props.authName} />
                            </NavLink>
                            <input className={s.newPost_title} type="text"
                                ref={NewPostEl} value={props.newPostText} onChange={onPostChange}
                                placeholder="Что у вас нового?" onClick={() => setMode(true)} />
                        </div>
                }
                {allPosts(posts).reverse()}
            </div>

            {/* rightside */}
            <div className={s.rightside} >
                <span className={cn({ [s.activeRS]: RightMode1 === true }, s.rightside_item)}
                    onClick={() => {
                        setRightMode1(!RightMode1); setRightMode2(false); setMenuMode1(false); setMenuMode2(false); setMenuMode3(false)
                    }}>Новости</span>
                {
                    RightMode1
                        ? <ul className={s.rightside_ul}>
                            <li className={cn({ [s.activeItem]: MenuMode1 === true }, s.menu_item)} onClick={() => { setMenuMode1(!MenuMode1); setMenuMode2(false); setMenuMode3(false) }}>
                                Музыка
                            </li>
                            <li className={cn({ [s.activeItem]: MenuMode2 === true }, s.menu_item)} onClick={() => { setMenuMode2(!MenuMode2); setMenuMode1(false); setMenuMode3(false) }}>
                                Фотографии
                            </li>
                            <li className={cn({ [s.activeItem]: MenuMode3 === true }, s.menu_item)} onClick={() => { setMenuMode3(!MenuMode3); setMenuMode1(false); setMenuMode2(false) }}>
                                Друзья
                            </li>
                        </ul>
                        : null
                }

                <span className={cn({ [s.activeRS]: RightMode2 === true }, s.rightside_item)}
                    onClick={() => {
                        setRightMode2(!RightMode2); setRightMode1(false); setMenuMode5(false);
                        setMenuMode4(false)
                    }}>Рекомендации</span>
                {
                    RightMode2
                        ? <div className={s.ri}>
                            <ul >
                                <li className={cn({ [s.activeItem]: MenuMode4 === true }, s.menu_item)} onClick={() => { setMenuMode4(!MenuMode4); setMenuMode5(false) }}>
                                    Ваши рекомендации
                                </li>
                                <li className={cn({ [s.activeItem]: MenuMode5 === true }, s.menu_item)} onClick={() => { setMenuMode5(!MenuMode5); setMenuMode4(false) }}>
                                    Рекомендации друзей
                                </li>

                            </ul>
                        </div>
                        : null
                }
            </div>
        </div >
    )
}