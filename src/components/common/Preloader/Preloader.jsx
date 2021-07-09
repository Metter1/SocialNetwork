import React from 'react'
import s from './preloader.module.css'

export default function Preloader() {
    return (
        <div>
            <img className={s.preloader} src='/images/preloader.svg'/>
        </div>
    )   
}
