import React from 'react'
import s from '../../news.module.css'
import heart from '../../../../assets/images/news/heart_active.svg'

export default function Post(props) {
    

    return (
        <div className={s.posts}>
            <div className={s.content}>
            <p className={s.text}>{props.message}</p>
            </div>
            <div className={s.info}>
            <img className={s.like_img} src={heart} alt="heart" />
            <span className={s.like}>{props.likes}</span>
            </div>
        </div>

    )
}

