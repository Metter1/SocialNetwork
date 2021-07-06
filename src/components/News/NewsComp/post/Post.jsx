import React from 'react'
import s from '../../news.module.css'


export default function Post(props) {
    

    return (
        <div className={s.posts}>
            <div className={s.content}>
            <p className={s.text}>{props.message}</p>
            </div>
            <div className={s.likes}>{props.likes}</div>
        </div>

    )
}

