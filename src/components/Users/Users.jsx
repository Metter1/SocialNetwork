import React from 'react'
import s from './users.module.css'

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
                            <div className={s.user}>
                                <img src={u.photos.small != null ? u.photos.small : 'images/userPage.svg'} alt="photo" className={s.photo} />
                                <h4 className={s.user__name}>{u.name}</h4>
                                {u.followed ? <button onClick={() => { props.unfollow(u.id) }} className={s.btn}>followed</button> :
                                    <button onClick={() => { props.follow(u.id) }} className={s.btn}>unfollowed</button>}

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}