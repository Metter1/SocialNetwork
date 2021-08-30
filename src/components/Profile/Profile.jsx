import React from 'react'
import s from './profile.module.css'
import Preloader from './../common/Preloader/Preloader';

export default function Profile(props) {

    if(!props.profile){
        return <Preloader/>
        
    }

    const onMainPhotoSelected = (e) =>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.block_avatar}>
                <img className={s.avatar} src={ props.profile.photos.large != null ? props.profile.photos.large : 'https://www.svgrepo.com/show/213315/avatar-profile.svg' } alt="icon user" />
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
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

