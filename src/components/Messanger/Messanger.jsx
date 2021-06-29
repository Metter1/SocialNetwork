import React from 'react'
import s from './messanger.module.css'
import Message from './Message/Message'
import Users from './User/User'

let users = [
    {
        id: 1,
        name: 'Eugene'
    },
    {
        id: 2,
        name: 'Dima'
    },
    {
        id: 3,
        name: 'Sasha'
    },
    {
        id: 4,
        name: 'Vasya'
    }
]

let messages = [
    {
        id: 1,
        message: '21321'
    },
    {
        id: 2,
        message: 'fsdfs123'
    },
    {
        id: 3,
        message: 'gsgs'
    },
    {
        id: 4,
        message: 'vcxvx'
    }
]
let usersEl = users.map( u =>{ return <Users id={u.id} name={u.name} /> })
let Messages = messages.map( m =>{ return <Message id={m.id} message={m.message}/> })




export default function Messanger() {
    return (
        <div className={s.block}>
            <div className={s.users}>
            {usersEl}

            </div>
            <div className={s.message}>
            {Messages}
            </div>
        </div>
    )
}
