import React from 'react'
import s from '../messenger.module.css'
import { NavLink } from 'react-router-dom';



export default function Users(props) {
    let path = '/Messages/' + props.id;
    return (
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    )
}


