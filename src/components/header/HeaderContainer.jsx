import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import { setAuthUserDaTa } from './../../redux/auth-reducer';
import { authAPI } from '../../api/api';


class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.getAuth().then(data => {
                if(data.resultCode === 0) {
                    let {email, id, login} = data.data
                    this.props.setAuthUserDaTa(email, id, login)
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserDaTa })(HeaderContainer);
