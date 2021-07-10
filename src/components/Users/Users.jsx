import React from 'react'
import s from './users.module.css'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Users(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div className={s.pagenation}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.pagenationActive} onClick={(event) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            <div className={s.users}>
                {
                    props.users.map(u => {
                        return (
                            <div className={s.user} key={u.id}>
                                <NavLink to={'/Profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : 'images/userPage.svg'}
                                        alt="photo" className={s.photo} />
                                </NavLink>
                                <h4 className={s.user__name}>{u.name}</h4>
                                {u.followed ?

                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'c1eaf6da-148d-4a7c-ae40-1fdcc6756cb9'
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)

                                            }
                                        });
                                    }} className={s.btn}>followed</button> :



                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'c1eaf6da-148d-4a7c-ae40-1fdcc6756cb9'
                                            }
                                        }).then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                    }} className={s.btn}>unfollowed</button>}

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
