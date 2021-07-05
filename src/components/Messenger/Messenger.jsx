import React from 'react'
import s from './messenger.module.css'
import Message from './Message/Message'
import Users from './User/Users'
import { addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/messenger-reducer'
// updateNewPostTextActionCreator;




export default function Messanger(props) {

    let usersEl = props.MessengerPage.users.map(u => { return <Users id={u.id} name={u.name} /> })
    let Messages = props.MessengerPage.messages.map(m => { return <Message id={m.id} message={m.message} /> })
    let addMessage = () =>{
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={s.block}>
            <div className={s.users}>
                {usersEl}

            </div>
            <div className={s.message}>
                {Messages}
                <div className={s.textarea}>
                    <textarea name="" onChange={onMessageChange} value={props.MessengerPage.newMessageText} placeholder="smt">

                    </textarea>
                    <button onClick={addMessage}>

                    </button>
                </div>
            </div>
        </div>
    )
}
