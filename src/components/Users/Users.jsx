import React from 'react'
import s from './users.module.css'
import * as axios from 'axios'
export default function Users(props) {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            console.log(response);
            props.setUsers(response.data.items)
        });
    }



    return (
        <div>
            <div className={s.users}>
                {
                    props.users.map(u => {
                        return (
                            <div className={s.user}>
                                <img src={u.photos.small != null ? u.photos.small: 'images/userPage.svg'} alt="photo" className={s.photo} />
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



// USERS WITHOUT API
 // if (props.users.length === 0) {
    //     let Users =
    //         [
    //             {
    //                 id: 1, photoUrl: 'https://image.flaticon.com/icons/png/512/147/147144.png', followed: false,
    //                 fullName: 'Eugene', status: 'Boss', location: { city: 'Krasnoyarsk', country: 'Russia' }
    //             },
    //             {
    //                 id: 2, photoUrl: 'https://img2.freepng.ru/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg',
    //                 followed: true, fullName: 'Sasha', status: 'LFC', location: { city: 'Moscow', country: 'Russia' }
    //             },
    //             {
    //                 id: 3, photoUrl: 'https://image.flaticon.com/icons/png/512/194/194938.png', followed: false,
    //                 fullName: 'Maria', status: 'BG G', location: { city: 'SPB', country: 'Russia' }
    //             },
    //             {
    //                 id: 4, photoUrl: 'https://image.flaticon.com/icons/png/512/147/147140.png', followed: true,
    //                 fullName: 'Alex', status: 'LFC', location: { city: 'Minks', country: 'Belarus' }
    //             },
    //         ]
    //     props.setUsers(Users)
    // }