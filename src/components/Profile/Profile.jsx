import React from 'react'
import s from './profile.module.css'

export default function Profile() {
    return (
        <div className={s.wrapper}>
            <div className={s.block_avatar}>
                <img className={s.avatar} src="images/unknow_user.svg" alt="icon user" />
            </div>
            <div className={s.block_info}>
                <h3 className={s.title}>
                    Unknown User
                </h3>
            </div>
        </div>
    )
}
