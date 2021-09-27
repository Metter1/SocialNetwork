import React from 'react'
import s from '../messenger.module.css'
import userImg from '../../../assets/images/messenger/user.svg'

export default function Message(props) {
    return (
        <div className={s.message_item}>
            <div className={s.message_user}>
                <img className={s.message_img} src={userImg} alt="" />
                <span className={s.message_userName}>Eugene</span>
            </div>
            <div className={s.message_text}>{props.message}</div>
        </div>
    )
}

