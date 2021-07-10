import React from 'react'
import s from './profile.module.css'
import Preloader from './../common/Preloader/Preloader';

export default function Profile(props) {

    if(!props.profile){
        return <Preloader/>
        
    }

    return (
        <div className={s.wrapper}>
            <div className={s.block_avatar}>
                <img className={s.avatar} src={props.profile.photos.large != null ? props.profile.photos.large : '/images/unknow_user.svg'} alt="icon user" />
            </div>
            <div className={s.block_info}>
                <h3 className={s.title}>
                {props.profile.fullName}
                </h3>
                <span>
                    {props.profile.aboutMe}
                </span>
            </div>
        </div>
    )
}
