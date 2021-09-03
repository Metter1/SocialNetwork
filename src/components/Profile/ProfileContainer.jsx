import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';
import ProfileStatusFunc from './ProfileInfo/ProfileStatusHook';

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userID = this.props.match.params.userID;

        if (!userID) {
            userID = this.props.authorizeduserID;
            if (!userID) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userID);
        this.props.getUserStatus(userID);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    

    componentDidUpdate(prevProps){
        if(this.props.match.params.userID !== prevProps.match.params.userID){

            this.refreshProfile()
        }
    }

    render() {
        return (
            <div >
                <Profile {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.userID}
                savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile} />
                <ProfileStatusFunc status={this.props.status} updateStatus={this.props.updateUserStatus} />
            </div >
        )
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizeduserID: state.auth.userID
    }
}


export default compose
    (
        connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
        withRouter,
        withAuthRedirect
    )
    (ProfileContainer)

