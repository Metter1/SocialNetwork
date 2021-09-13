import React from 'react'
import s from './users.module.css'
import { NavLink } from 'react-router-dom';
import Paginator from './../common/paginator/Paginator';

export default function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div >
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            <div className={s.users}>
                {
                    props.users.map(u => {
                        return (
                            <div className={s.user} key={u.id}>
                                <NavLink to={'/Profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : 'https://www.svgrepo.com/show/213315/avatar-profile.svg'}
                                        alt="photo" className={s.photo} />
                                </NavLink>
                                <h4 className={s.user__name}>{u.name}</h4>
                                {u.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => { props.unfollow(u.id) }} className={s.btn}>followed</button> :

                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => { props.follow(u.id) }} className={s.btn}>unfollowed</button>}

                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
