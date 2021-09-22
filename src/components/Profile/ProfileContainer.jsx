import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getAuthUserProfile } from './../../redux/authProfile-reducer';
class ProfileContainer extends React.Component {

    refreshProfile() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = this.props.authorizedUserID;
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

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {

            this.refreshProfile()
        }
    }

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


    render() {
        return (
            <div >
                <Profile {...this.props} profile={this.props.profile}
                    isOwner={!this.props.match.params.userID || (this.props.authorizedUserID === Number(this.props.match.params.userID))}
                    savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}
                    status={this.props.status} updateStatus={this.props.updateUserStatus}
                    activeMore={this.activateMore.bind(this)} deactiveMore={this.deactiveMore.bind(this)}
                    More={this.state.More} />
            </div >
        )
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserID: state.auth.userID
    }
}


export default compose
    (
connect(mapStateToProps, { getUserProfile, getUserStatus, getAuthUserProfile, updateUserStatus, savePhoto, saveProfile }),
        withRouter,
        withAuthRedirect
    )
    (ProfileContainer)

