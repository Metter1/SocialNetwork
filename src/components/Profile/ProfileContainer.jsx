import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';
import ProfileStatus from './ProfileInfo/ProfileStatus';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 18180;
        }
        this.props.getUserProfile(userID);
        this.props.getUserStatus(userID);
    }
    

    render() {

        return (
            <div >
                <Profile {...this.props} profile={this.props.profile} />
                <ProfileStatus status={this.props.status} updateStatus={this.props.updateUserStatus} />
            </div >
        )
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


export default compose
    (
        connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
        withRouter,
        withAuthRedirect
    )
    (ProfileContainer)

