import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messenger-reducer'
import Messenger from './Messenger'
import { connect } from 'react-redux'
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        users: state.MessengerPage.users,
        messages: state.MessengerPage.messages,
        newMessageText: state.MessengerPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (id) => {
            dispatch(addMessageActionCreator(id))
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messenger)
