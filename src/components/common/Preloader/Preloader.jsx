import React from 'react'
import s from './preloader.module.css'
import preloader from '../../../assets/images/preloader.svg'

export default function Preloader() {
    return (
        <div>
            <img className={s.preloader} src={preloader}/>
        </div>
    )   
}
