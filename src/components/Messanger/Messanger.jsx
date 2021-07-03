import React from 'react'
import s from './messanger.module.css'
import Message from './Message/Message'
import Users from './User/Users'




export default function Messanger(props) {

    let usersEl = props.state.MessengerPage.users.map(u => { return <Users id={u.id} name={u.name} /> })
    let Messages = props.state.MessengerPage.messages.map(m => { return <Message id={m.id} message={m.message} /> })
    return (
        <div className={s.block}>
            <div className={s.users}>
                {usersEl}

            </div>
            <div className={s.message}>
                {Messages}
                <div className={s.textarea}>
                    <textarea name="" placeholder="smt">

                    </textarea>
                    <button>
                        
                    </button>
                </div>
            </div>
        </div>
    )
}
