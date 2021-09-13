import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import { getAuthUserData,  logout } from './../../redux/auth-reducer';


// class HeaderContainer extends React.Component {

//     componentDidMount() {
//         this.props.getAuthUserData();
//     }

//     render() {
//         return <Header {...this.props} />
//     }
// }




const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthUserData()
    }, [])
    return <Header {...props} />
}

const mapStateToProps = (state) => ({
    userID: state.auth.userID,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile,
    UserAuthPhoto: state.auth.UserAuthPhoto
})

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);
