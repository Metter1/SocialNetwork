import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profile-reducer';
import {  withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';
import ProfileStatus from './ProfileInfo/ProfileStatus';
import ProfileInfo from './ProfileInfo/ProfileInfo';
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID){
            userID = 18180;
        }
        this.props.getUserProfile(userID);
    }


    render() {
        
        return (
            <div >
                <Profile {...this.props} profile={this.props.profile} />
                <ProfileStatus status={'sdsd'} />
            </div >
        )
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)
(ProfileContainer)

