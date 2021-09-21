import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import { getAuthUserData, logout } from './../../redux/auth-reducer';
import { getUserProfile } from '../../redux/profile-reducer';
const HeaderContainer = (props) => {
    const [menuActive, setMenuActive] = useState(false)
    return <Header {...props} setMenuActive={setMenuActive} menuActive={menuActive} />
}

const mapStateToProps = (state) => ({
    userID: state.auth.userID,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    authPhoto: state.profilePage.profile.photos.small,
    authName: state.profilePage.profile.fullName,
})

export default connect(mapStateToProps, { getAuthUserData, getUserProfile, logout })(HeaderContainer);
