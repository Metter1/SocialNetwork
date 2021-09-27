import React, { useRef, useState } from 'react'
import s from './messenger.module.css'
import Message from './Message/Message'
import MessengerUsers from './MessengerUsers/MessengerUsers'
import cn from 'classnames';
import btn from '../../assets/images/menu.svg'

export default function Messenger(props) {
    let usersEl = props.users.map(u => { return <MessengerUsers id={u.id} key={u.id} name={u.name} /> })
    let messages = () => {
        let Messages = props.messages.map(m => { return <Message id={m.id} key={m.id} message={m.message} /> })
        return Messages
    }

    let addMessages = () => {
        let id = props.messages.length + 1;
        props.addMessage(id)
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    }

    const inputEl = useRef(null);

    let focus = () => {
        inputEl.current.focus();
    }

    let enterSend = (e) => {
        if (e.keyCode === 13) {
            if (props.newMessageText !== '') {
                addMessages();
                e.preventDefault()
            }
            e.preventDefault()
        }
    }
    const [RightMode1, setRightMode1] = useState(true)
    const [RightMode2, setRightMode2] = useState(false)

    return (
        <div className={s.block}>
            <div className={s.leftside}>
                <div className={s.users}>
                    {usersEl}
                </div>
                <div className={s.message}>
                    <div className={s.block_messages}>
                        {messages().reverse()}
                    </div>
                    <div className={s.textarea}>
                        <textarea ref={inputEl} onKeyDown={(e) => enterSend(e)} className={s.input} name="text" type='text' autoFocus={true} onChange={onMessageChange} value={props.newMessageText} placeholder="Напишите сообщение..." />
                        {props.newMessageText ? <img className={s.btnImg} src={btn} alt="btn" onClick={() => { addMessages(); focus() }} /> : <img className={s.btnImg_hidden} src={btn} alt='alt' />}
                    </div>
                </div>

            </div>

            {/* rightside */}
            <div className={s.rightside} >
                <span className={cn({ [s.activeRS]: RightMode1 === true }, s.rightside_item)}
                    onClick={() => {
                        setRightMode1(!RightMode1); setRightMode2(false);
                    }}>Все чаты
                </span>
                <span className={cn({ [s.activeRS]: RightMode2 === true }, s.rightside_item)}
                    onClick={() => {
                        setRightMode2(!RightMode2); setRightMode1(false);
                    }}>Непрочитанные
                </span>
            </div>
        </div>
    )
}