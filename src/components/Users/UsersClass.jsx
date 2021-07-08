import React from 'react'
import s from './users.module.css'
import * as axios from 'axios'


class usersC extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            console.log(response);
            this.props.setUsers(response.data.items)
            this.props.setUsersTotalCount(response.data.totalCount)
            
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return (
            <div>
                <div  className={s.pagenation}>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && s.pagenationActive} onClick={(event) => { this.onPageChanged(p) }}>{p}</span>
                    })}
                </div>
                <div className={s.users}>
                    {
                        this.props.users.map(u => {
                            return (
                                <div className={s.user}>
                                    <img src={u.photos.small != null ? u.photos.small : 'images/userPage.svg'} alt="photo" className={s.photo} />
                                    <h4 className={s.user__name}>{u.name}</h4>
                                    {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }} className={s.btn}>followed</button> :
                                        <button onClick={() => { this.props.follow(u.id) }} className={s.btn}>unfollowed</button>}

                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}


export default usersC;