import React from 'react'
import Message from './Message/Message'
import Users from './User/Users'
import { addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/messenger-reducer'
import Messenger from './Messenger'
// updateNewPostTextActionCreator;




export default function MessengerContainer(props) {
    let state = props.store.getState();
    let addMessage = () =>{
        props.store.dispatch(addMessageActionCreator())
    }
    let updateNewMessageText = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <Messenger
        users = {state.MessengerPage.users}
        messages = {state.MessengerPage.messages}
        newMessageText = {state.MessengerPage.newMessageText}
        addMessage = {addMessage}
        updateNewMessageText = {updateNewMessageText} />
    )
}
