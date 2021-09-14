import React, {useEffect,useState} from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import { getAuthUserData,  logout } from './../../redux/auth-reducer';

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthUserData()
    }, [])
    const [menuActive, setMenuActive] = useState(false)
    return <Header {...props} setMenuActive={setMenuActive} menuActive={menuActive} />
}

const mapStateToProps = (state) => ({
    userID: state.auth.userID,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    UserAuthPhoto: state.profilePage.UserAuthPhoto,
    UserAuthName: state.profilePage.UserAuthName
})

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);
