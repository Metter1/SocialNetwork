import React from 'react'
import s from './sidebar.module.css'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <ul className={s.menu}>

                <NavLink to="/Profile" activeClassName={s.active}>
                    <li className={s.list}>
                        <img className={s.icon} src="https://img.icons8.com/material/24/000000/businessman--v1.png" alt="Icon" />
                        My profile
                    </li>
                </NavLink>


                <NavLink to="/News" activeClassName={s.active}>
                    <li className={s.list}>
                        <img className={s.icon} src="https://img.icons8.com/material/24/000000/demand.png" alt="Icon" />
                        News
                    </li>
                </NavLink>

                <NavLink to="/Messages" activeClassName={s.active}>
                    <li className={s.list}>
                        <img className={s.icon} src="https://img.icons8.com/material/24/000000/communication.png" alt="Icon" />
                        Messenger
                    </li>
                </NavLink>

                <NavLink to="/Users" activeClassName={s.active}>
                    <li className={s.list}>
                        <img className={s.icon} src="https://img.icons8.com/material/24/000000/organization-chart-people.png" alt="Icon" />
                        Users
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}
