import React, { useState } from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import { getAuthUserData, logout } from './../../redux/auth-reducer';
const HeaderContainer = (props) => {
    const [menuActive, setMenuActive] = useState(false)
    return <Header {...props} setMenuActive={setMenuActive} menuActive={menuActive} />
}

const mapStateToProps = (state) => ({
    userID: state.auth.userID,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authPhoto: state.AuthProfile.AuthProfile.photos.small,
    authName: state.AuthProfile.AuthProfile.fullName,
})

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);