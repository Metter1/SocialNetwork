import React, { useState } from 'react'
import s from './profile.module.css'
import Preloader from './../common/Preloader/Preloader';
import ProfileDataForm from './ProfileInfo/ProfileDataForm'
import ProfileStatusHook from './ProfileInfo/ProfileStatusHook';

import facebook_icon from '../../assets/images/profile_icons/facebook_icon.svg'
import website_icon from '../../assets/images/profile_icons/website_icon.svg'
import vk_icon from '../../assets/images/profile_icons/vk_icon.svg'
import twitter_icon from '../../assets/images/profile_icons/twitter_icon.svg'
import instagram_icon from '../../assets/images/profile_icons/instagram_icon.svg'
import youtube_icon from '../../assets/images/profile_icons/youtube_icon.svg'
import github_icon from '../../assets/images/profile_icons/github_icon.svg'
import mainlink_icon from '../../assets/images/profile_icons/mainlink_icon.svg'


export default function Profile({ profile, savePhoto, isOwner, saveProfile, status, updateStatus, activeMore, deactiveMore, More }) {
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
                {isOwner && <label className={s.photo_input} htmlFor="file-upload">Загрузить фото<input id='file-upload' type={"file"} accept="image/*" onChange={onMainPhotoSelected} /> </label>}
            </div>
            {editMode
                ? <ProfileDataForm profile={profile} Contact={Contact} saveProfile={saveProfile} setEditMode={setEditMode}/>
                : <ProfileData profile={profile} isOwner={isOwner}
                    status={status} updateStatus={updateStatus}
                    activeMore={activeMore} deactiveMore={deactiveMore} More={More}
                    goToEditMode={() => { setEditMode(true) }}/>}
        </div>
    )

}


const ProfileData = ({ profile, isOwner, goToEditMode, status, updateStatus, activeMore, deactiveMore, More}) => {

    return <div className={s.block_info}>
        <div className={s.aboutMe_blog}>
            <div className={s.name_col}>
                <div className={s.name_row}>
                    <span className={s.profile_title}>{profile.fullName}</span>
                    {isOwner && <button className={s.editBtn} onClick={goToEditMode}>Edit</button>}
                </div>
                {isOwner ? <ProfileStatusHook status={status} updateStatus={updateStatus} /> : <p className={s.status}>{status}</p>}
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

            {!More ? <span className={s.blog_more} onClick={activeMore}>Скрыть подробную информацию</span>
                : <span className={s.blog_more} onClick={deactiveMore}>Показать подробную информацию</span>}

        </div>
        <div className={More ? `${s.blog_contact}` : `${s.blog_contact_show}`}>
            <span className={s.title}>Contacts:</span>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}


const Contact = ({ contactTitle, contactValue }) => {
    let contactIcons = {
        facebook: facebook_icon,
        website: website_icon,
        vk: vk_icon,
        twitter: twitter_icon,
        instagram: instagram_icon,
        youtube: youtube_icon,
        github: github_icon,
        mainLink: mainlink_icon,
    }
    return (<div className={s.contact_item}>
        {!contactIcons.contactTitle ? <img className={s.profile_icon} src={contactIcons[contactTitle]} alt={contactTitle} /> : null}
        <span className={s.link_text}>{contactTitle}:</span>
        <a className={s.link} href={contactValue} target="_blank">{contactValue}</a>
    </div>)
}