import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus } from './../../redux/profile-reducer';
import { getAuthUserProfile, getAuthUserStatus, updateAuthUserStatus, savePhoto, saveProfile } from './../../redux/authProfile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component {

    //profile more info
    state = {
        More: true,
    }

    activateMore() {
        this.setState({
            More: true
        })
    }

    deactiveMore() {
        this.setState({
            More: false
        })
    }

    refreshProfile() {
        
        let userID = this.props.match.params.userID;
        if (!userID || (this.props.authorizedUserID === Number(this.props.match.params.userID))) {
            userID = this.props.authorizedUserID;
            if (!userID) {
                this.props.history.push("/login")
            }
            this.props.getAuthUserStatus(userID)
        } else {
            this.props.getUserProfile(userID);
            this.props.getUserStatus(userID);
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            this.activateMore()
            this.refreshProfile()
        }
    }

    
    isOwner() {
        return !this.props.match.params.userID || (this.props.authorizedUserID === Number(this.props.match.params.userID))
    }

    render() {
        return (
            <div >
                {this.isOwner()
                    ? <Profile {...this.props} profile={this.props.AuthProfile}
                        isOwner={this.isOwner()} AuthUserID={this.props.authorizedUserID}
                        savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}
                        status={this.props.AuthStatus} updateStatus={this.props.updateAuthUserStatus}
                        activeMore={this.activateMore.bind(this)} deactiveMore={this.deactiveMore.bind(this)}
                        More={this.state.More} />

                    : <Profile profile={this.props.profile}
                        isOwner={this.isOwner()}
                        status={this.props.status}
                        activeMore={this.activateMore.bind(this)} deactiveMore={this.deactiveMore.bind(this)}
                        More={this.state.More} />}

            </div >
        )
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserID: state.auth.userID,
        AuthProfile: state.AuthProfile.AuthProfile,
        AuthStatus: state.AuthProfile.status,
    }
}


export default compose
    (
        connect(mapStateToProps, {
            getUserProfile, getUserStatus,
            getAuthUserProfile, getAuthUserStatus,
            updateAuthUserStatus, savePhoto,
            saveProfile
        }),
        withRouter,
        withAuthRedirect
    )
    (ProfileContainer)

