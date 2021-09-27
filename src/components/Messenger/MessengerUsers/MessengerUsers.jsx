import React from 'react'
import s from '../messenger.module.css'
import { NavLink } from 'react-router-dom';
import userImg from '../../../assets/images/messenger/user.svg'

export default function MessengerUsers(props) {
    let path = '/Messages/' + props.id;
    return (
        <div className={s.users_item}>
            <img className={s.user_img} src={userImg} alt="userImg" />
            <NavLink className={s.user_title} to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}


