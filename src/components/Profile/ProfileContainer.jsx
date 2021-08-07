import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';
import ProfileStatusFunc from './ProfileInfo/ProfileStatusFunc';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID;
        
        if (!userID) {
            userID = this.props.authorizeduserID;
            if(!userID){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userID);
        this.props.getUserStatus(userID);
    }
    
    render() {
        return (
            <div >
                <Profile {...this.props} profile={this.props.profile} />
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
        connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
        withRouter,
        withAuthRedirect
    )
    (ProfileContainer)

