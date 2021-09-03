import React, { useState } from 'react'
import s from './profile.module.css'
import Preloader from './../common/Preloader/Preloader';
import ProfileDataForm from './ProfileInfo/ProfileDataForm'

export default function Profile({ profile, savePhoto, isOwner, saveProfile }) {
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
                ? <ProfileDataForm profile={profile} Contact={Contact} saveProfile={saveProfile} setEditMode={setEditMode}/>
                : <ProfileData profile={profile} isOwner={isOwner}
                 goToEditMode={() => { setEditMode(true) }}/>}

        </div>
    )
}


const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div className={s.block_info}>

        <h3 className={s.title}>
            {profile.fullName}
        </h3>
        <span>
           <b>обо мне:</b> {profile.aboutMe}
        </span>
        <b className={s.title}> В поисках работы: {profile.lookingForAJob ? 'да' : 'нет'} </b>
        <b>описание{profile.lookingForAJobDescription}</b>
        <b className={s.title}>Contacts:</b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
    </div>
}


const Contact = ({ contactTitle, contactValue}) => {
    return <b className={s.title}> {contactTitle} =  {contactValue}</b>
}