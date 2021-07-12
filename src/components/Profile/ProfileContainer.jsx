import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID){
            userID = 18180;
        }
        this.props.getUserProfile(userID);
    }


    render() {
        if(!this.props.isAuth){return <Redirect to='/Login'/>}
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div >
        )
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let URLContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(URLContainer)