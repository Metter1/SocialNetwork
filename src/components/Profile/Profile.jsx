import React, { useState } from 'react'
import s from './profile.module.css'
import Preloader from './../common/Preloader/Preloader';
import ProfileDataForm from './ProfileInfo/ProfileDataForm'
import ProfileStatusHook from './ProfileInfo/ProfileStatusHook';


export default function Profile({ profile, savePhoto, isOwner, saveProfile, status, updateStatus }) {
    let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader />

    }


    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={s.wrapper}>
            <div className={s.block_avatar}>
                <img className={s.avatar} src={profile.photos.large != null ? profile.photos.large : 'https://www.svgrepo.com/show/213315/avatar-profile.svg'} alt="icon user" />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

            </div>
            {editMode
                ? <ProfileDataForm profile={profile} Contact={Contact} saveProfile={saveProfile} setEditMode={setEditMode} />
                : <ProfileData profile={profile} isOwner={isOwner} status={status} updateStatus={updateStatus}
                    goToEditMode={() => { setEditMode(true) }} />}
        </div>
    )

}


const ProfileData = ({ profile, isOwner, goToEditMode, status, updateStatus }) => {
    return <div className={s.block_info}>
        <div className={s.aboutMe_blog}>
            <div className={s.name_col}>
                <span className={s.profile_title}>{profile.fullName}</span>
                <ProfileStatusHook status={status} updateStatus={updateStatus} />
            </div>
            <div className={s.blog_item}>
                <p className={s.profile_title_item1}>О себе</p>
                <p className={s.profile_text}>{profile.aboutMe}</p>
            </div>

            <div className={s.blog_item}>
                <p className={s.profile_title_item}>В поисках работы: {profile.lookingForAJob ? 'да' : 'нет'} </p>

            </div>
            <div className={s.blog_item}>
                <p className={s.profile_title_item3}>Описание</p>
                <p className={s.profile_text}>{profile.lookingForAJobDescription}</p>
            </div>
            <span className={s.blog_more} >Показать подробную информацию</span>
        </div>
        <b className={s.title}>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
    </div>
}


const Contact = ({ contactTitle, contactValue }) => {
    return <a className={`${s.title} ${s.link}`} href={contactValue ? { contactValue } : null}>{contactTitle}</a>
}