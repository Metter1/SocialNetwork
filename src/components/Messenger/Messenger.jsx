import React from 'react'
import s from './messenger.module.css'
import Message from './Message/Message'
import Users from './User/Users'
// updateNewPostTextActionCreator;




export default function Messenger(props) {

    let usersEl = props.users.map(u => { return <Users id={u.id} name={u.name} /> })
    let Messages = props.messages.map(m => { return <Message id={m.id} message={m.message} /> })
    
    let addMessage = () =>{
        props.addMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.block}>
            <div className={s.users}>
                {usersEl}

            </div>
            <div className={s.message}>
                {Messages}
                <div className={s.textarea}>
                    <textarea name="" onChange={onMessageChange} value={props.newMessageText} placeholder="smt">

                    </textarea>
                    <button onClick={addMessage}>

                    </button>
                </div>
            </div>
        </div>
    )
}
