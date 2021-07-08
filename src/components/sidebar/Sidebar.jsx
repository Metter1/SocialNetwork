import React from 'react'
import s from './sidebar.module.css'
import { NavLink } from 'react-router-dom'


export default function Sidebar() {
    return (
        <div>
            <ul className={s.menu}>

                <NavLink to="/Profile" activeClassName={s.active}>
                    <li className={s.list}>
                        <img className={s.icon} src="/images/user.svg" alt="Icon" />
                        My profile
                    </li>
                </NavLink>


                <NavLink to="/News" activeClassName={s.active}>
                    <li className={s.list}>
                        <img className={s.icon} src="/images/news.svg" alt="Icon" />
                        News
                    </li>
                </NavLink>

                <NavLink to="/Messages" activeClassName={s.active}>
                    <li className={s.list}>
                        <img className={s.icon} src="/images/comment.svg" alt="Icon" />
                        Messenger
                    </li>
                </NavLink>

                <NavLink to="/Users" activeClassName={s.active}>
                    <li className={s.list}>
                        <img className={s.icon} src="/images/userAdd.svg" alt="Icon" />
                        Users
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}
