import React from 'react'
import s from '../messanger.module.css'


export default function Message(props){
    return (
        
            <p className={s.text}>{props.message}</p>
        
    )
}

