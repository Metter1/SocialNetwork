import React from 'react'
import s from './users.module.css'
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api';

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
                                    <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                        props.toggleIsFollowing(true, u.id)
                                        followAPI.deleteFollow(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleIsFollowing(false, u.id)
                                        });
                                    }} className={s.btn}>followed</button> :

                                    <button disabled={props.followingInProgress.some(id => id===u.id)} onClick={() => {
                                        props.toggleIsFollowing(true, u.id)
                                        followAPI.postFollow(u.id).then(data => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFollowing(false, u.id)
                                        });
                                    }} className={s.btn}>unfollowed</button>}

                            </div>
                        )
                    })
                }
            </div>

        </div >
    )
}
