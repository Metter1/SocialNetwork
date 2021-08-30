import React from 'react'
import s from './preloader.module.css'

export default function Preloader() {
    return (
        <div>
            <img className={s.preloader} src='./../../../../public/images/preloader.svg'/>
        </div>
    )   
}
